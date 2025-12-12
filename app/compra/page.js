import { Compra } from "../../database/tables";
import { redirect } from "next/navigation";
import '../css/listagem.css';

async function ExcluirCompras(formdata) {
    'use server';
    const id = formdata.get('id');
    const Compras = await Compra.findByPk(id);
    Compras.destroy();
    redirect('/compra')
}

async function compra() {
    const Compras = await Compra.findAll();
    return (
        <div>
            <h1>Lista de Compras da loja</h1>
            <a href = "/compra/novo" >Criar Bebida</a>
            <table border = "1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>VALOR</th>
                        <th>DATA</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Compras.map(function(compre){
                        return (
                            <tr key={compre.id}>
                                <td>{compre.id}</td>
                                <td>{compre.valor}</td>
                                <td>{compre.data}</td>
                                <td>
                                    <form action={'/compra/edita'}>
                                        <input name="id" type="hidden" defaultValue={compre.id}/>
                                        <button>Editar</button>
                                    </form>
                                    <form action={ExcluirCompras}>
                                        <input name="id" type="hidden" defaultValue={compre.id}/>
                                        <button>Excluir</button>
                                    </form>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default compra;