import { redirect } from 'next/navigation';
import {Categoria} from '../../../database/tables';
import '../../css/cadastro.css';

async function editaCategoria(formData){
    'use server'
    const id = formData.get('id');
    const nome = formData.get('nome');

    const cat = await Categoria.findByPk(id);
    cat.nome = nome;

    await cat.save();

    redirect('/categorias')
}

async function TelaEditaCategoria({ searchParams }){
    const id =  searchParams.id;
    const cat = await Categoria.findByPk(id);
    return (
        <div>
        <h1>Editando Categoria</h1>
        
        <form action = {editaCategoria}>
            <br/>

        <input type = "hidden" name = "id" defaultValue = {cat.id}/>

        <br/>

            <label htmlFor="nome">Nome</label> <br/>
            <input type="text" name ="nome" defaultValue = {cat.nome}></input> <br/>
<br/>

<button>Cadastrar</button>
</form>
</div>
    );
}

export default TelaEditaCategoria;