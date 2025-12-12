import { redirect } from 'next/navigation';
import {Cliente} from '../../../database/tables';
import '../../css/cadastro.css';

async function editaCliente(formData){
    'use server'
    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const senha = formData.get('senha');

    const cliente = await Cliente.findByPk(id);
    cliente.nome = nome;
    cliente.email = email;
    cliente.senha = senha;

    await cliente.save();

    redirect('/clientes')
}

async function TelaEditaCliente({ searchParams }){
    const id =  searchParams.id;
    const cliente = await Cliente.findByPk(id);
    return (
    <div>
        <h1>Editando Cliente</h1>
        
        <form action = {editaCliente}>
            <input type = "hidden" name = "id" defaultValue = {cliente.id}/><br/>

            <label htmlFor="nome">Nome</label> <br/>
            <input type="text" name ="nome" defaultValue = {cliente.nome}></input> <br/>
            
            <label htmlFor="email">Email</label> <br/>
            <input type="text" name ="email" defaultValue = {cliente.email}></input> <br/>

            <label htmlFor="senha">Senha</label> <br/>
            <input type="text" name ="senha" defaultValue = {cliente.senha}></input> <br/><br/>

            <button>Cadastrar</button>
        </form>
    </div>
    );
}

export default TelaEditaCliente;