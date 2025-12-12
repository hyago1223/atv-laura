import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Produto = mysql.define('Produto', {
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10,2),
    teor: DataTypes.STRING(4),
    descricao: DataTypes.STRING

});

const Categoria = mysql.define('Categoria', {
    nome: DataTypes.STRING
});

const Cliente = mysql.define('Cliente', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
});


const Venda = mysql.define('Venda', {
    ValorTotal: DataTypes.DECIMAL(10,2),
    DataVenda: DataTypes.DATEONLY
});


const Compra = mysql.define('Compra', {
    valor: DataTypes.DECIMAL(10,2),
    data: DataTypes.DATEONLY
});

const ItemCompra = mysql.define('ItemCompra', {
    PrecoUni: DataTypes.DECIMAL(10,2),
    SubTot: DataTypes.DECIMAL(10,2),
    quantidade: DataTypes.INTEGER
});

const ItemVenda = mysql.define('ItemVenda', {
    SubTot: DataTypes.DECIMAL(10,2),
    quantidade: DataTypes.INTEGER
});


// RELACIONAMENTOS

// Venda
Cliente.hasMany(Venda);
Venda.belongsTo(Cliente);

// ItemVenda
Venda.hasMany(ItemVenda);
ItemVenda.belongsTo(Venda);

Produto.hasMany(ItemVenda);
ItemVenda.belongsTo(Produto);

// Produto

Categoria.hasMany(Produto, {
    foreignKey: 'CategoriaId'
});

// Define que um Produto pertence a uma Categoria
Produto.belongsTo(Categoria, {
    foreignKey: 'CategoriaId'
});


// ItemCompra
Compra.hasMany(ItemCompra);
ItemCompra.belongsTo(Compra);

Produto.hasMany(ItemCompra);
ItemCompra.belongsTo(Produto);

// Sincronizar com o banco

await mysql.sync();

export {
    Categoria, Cliente, Compra,
    ItemCompra, ItemVenda,
    Produto, Venda
};