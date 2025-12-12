import {Produto} from "../../database/tables";
import { redirect } from "next/navigation";
import '../css/listagem.css';

async function ExcluirBebida(formdata) {
    'use server';
    const id = formdata.get('id');
    const bebida = await Produto.findByPk(id);
    bebida.destroy();
    redirect('/bebidas')
}

async function Bebida() {
    const bebidas = await Produto.findAll();
    return (
        <div>
            <h1>Lista de Bebidas</h1>
            <a href = "/bebidas/novo" >Criar Bebida</a>
            <table border = "1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITULO</th>
                        <th>DESCRICAO</th>
                        <th>TEOR</th>
                        <th>PRECO</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bebidas.map(function(bebes){
                        return (
                            <tr key={bebes.id}>
                                <td>{bebes.id}</td>
                                <td>{bebes.nome}</td>
                                <td>{bebes.descricao}</td>
                                <td>{bebes.teor}</td>
                                <td>{bebes.preco}</td>
                                <td>
                                    <form action={'/bebidas/edita'}>
                                        <input name="id" type="hidden" defaultValue={bebes.id}/>
                                        <button>Editar</button>
                                    </form>
                                    <form action={ExcluirBebida}>
                                        <input name="id" type="hidden" defaultValue={bebes.id}/>
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

export default Bebida;