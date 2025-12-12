import {Categoria} from "../../database/tables";
import {redirect} from "next/navigation";
import '../css/listagem.css';

async function deletaCategoria(formData) {
    'use server';
    const id = formData.get('id');
    const cat = await Categoria.findByPk(id);
    await cat.destroy();
    redirect('/categorias')
}

async function Categorias() {
    const categorias = await Categoria.findAll();
    return (
        <div>
        <h1>Lista de Categorias</h1>
        <a href = "/categorias/novo" >Criar Categoria</a>

        <table border = "1">
            <thead>
                <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>AÇÕES</th>
                </tr>
            </thead>

<tbody>
    {
        categorias.map(function(cat){
        return (
            <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.nome}</td>
                <td>
                    <form action = {deletaCategoria}>
                        <input type = "hidden" name="id" defaultValue={cat.id}/>
                        <button>Excluir</button>
                    </form>
                    <form action={'/categorias/edita'}>
                        <input type="hidden" name = "id" defaultValue={cat.id}/>
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

export default Categorias;