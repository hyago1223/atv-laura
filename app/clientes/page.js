import {Cliente} from "../../database/tables";
import {redirect} from "next/navigation";
import '../css/listagem.css';

async function deletaCliente(formData) {
    'use server';
    const id = formData.get('id');
    const cliente = await Cliente.findByPk(id);
    await cliente.destroy();
    redirect('/clientes')
}

async function Clientes() {
    const clientes = await Cliente.findAll();
    return (
        <div>
        <h1>Lista de Clientes</h1>
        <a href = "/clientes/novo" >Criar Cliente</a>

        <table border = "1">
            <thead>
                <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>EMAIL</th>
                <th>SENHA</th>
                <th>AÇÕES</th>
                </tr>
            </thead>

<tbody>
    {
        clientes.map(function(pessoa){
        return (
            <tr key={pessoa.id}>
                <td>{pessoa.id}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.email}</td>
                <td>{pessoa.senha}</td>
                <td>
                    <form action = {deletaCliente}>
                        <input type = "hidden" name="id" defaultValue={pessoa.id}/>
                        <button>Excluir</button>
                    </form>
                    <form action={'/clientes/edita'}>
                    <input type="hidden" name = "id" defaultValue={pessoa.id}/>
                    <button>Editar</button>
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

export default Clientes;