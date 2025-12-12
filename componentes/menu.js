import '../app/css/menu.css'

function Menu (){
    return(
    <nav>
        <h1>LEBAR</h1>
        <div>
            <a href = "/" >HOME</a>&nbsp;
            <a href = "/bebidas" >BEBIDAS</a>&nbsp;
            <a href = "/clientes" >CLIENTES</a>&nbsp;
            <a href = "/categorias" >CATEGORIA</a>&nbsp;
            <a href = "/itemvenda" >ITEM VENDA</a>&nbsp;
            <a href = "/itemcompra" >ITEM COMPRA</a>&nbsp;
            <a href = "/venda" >VENDA</a>&nbsp;
            <a href = "/compra" >COMPRA</a>&nbsp;
        </div>
    </nav>
    );
}

export default Menu;