import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Produto = mysql.define('Produto', {
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10,2),
    teor: DataTypes.STRING(4),
    descricao: DataTypes.STRING

},
  { timestamps: true, freezeTableName: true }
);

const Categoria = mysql.define('Categoria', {
    nome: DataTypes.STRING
},
  { timestamps: true, freezeTableName: true }
);

const Cliente = mysql.define('Cliente', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
},
  { timestamps: true, freezeTableName: true }
);


const Venda = mysql.define('Venda', {
    ValorTotal: DataTypes.DECIMAL(10,2),
    DataVenda: DataTypes.DATEONLY
},
  { timestamps: true, freezeTableName: true }
);


const Compra = mysql.define('Compra', {
    valor: DataTypes.DECIMAL(10,2),
    data: DataTypes.DATEONLY
},
  { timestamps: true, freezeTableName: true }
);

const ItemCompra = mysql.define('ItemCompra', {
    PrecoUni: DataTypes.DECIMAL(10,2),
    SubTot: DataTypes.DECIMAL(10,2),
    quantidade: DataTypes.INTEGER
},
  { timestamps: true, freezeTableName: true }
);

const ItemVenda = mysql.define('ItemVenda', {
    SubTot: DataTypes.DECIMAL(10,2),
    quantidade: DataTypes.INTEGER
},
  { timestamps: true, freezeTableName: true }
);


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

export {
    Categoria, Cliente, Compra,
    ItemCompra, ItemVenda,
    Produto, Venda
};