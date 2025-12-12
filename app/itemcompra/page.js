import { ItemCompra } from "../../database/tables";
import { redirect } from "next/navigation";
import '../css/listagem.css';

async function ExcluirItemCompra(formdata) {
    'use server';
    const id = formdata.get('id');
    const ItemCompras = await ItemCompra.findByPk(id);
    ItemCompras.destroy();
    redirect('/compra')
}

async function itemCompra() {
    const ItemCompras = await ItemCompra.findAll();
    return (
        <div>
            <h1>Lista de Compras da loja</h1>
            <a href = "/compra/novo" >Criar Bebida</a>
            <table border = "1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Preco Unitario</th>
                        <th>SubTotal</th>
                        <th>Quantidade</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ItemCompras.map(function(compre){
                        return (
                            <tr key={compre.id}>
                                <td>{compre.id}</td>
                                <td>{compre.PrecoUni}</td>
                                <td>{compre.SubTot}</td>
                                <td>{compre.quantidade}</td>
                                <td>
                                    <form action={'/compra/edita'}>
                                        <input name="id" type="hidden" defaultValue={compre.id}/>
                                        <button>Editar</button>
                                    </form>
                                    <form action={ExcluirItemCompra}>
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

export default itemCompra;