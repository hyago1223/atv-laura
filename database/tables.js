import { DataTypes } from "sequelize";
// Usando a conexão PostgreSQL
import postgres from "./postgres.js"; 

// 🚨 Correção: Adicionado 'tableName' em minúsculas em todos os modelos para PostgreSQL.

const Produto = postgres.define("Produto", {
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10,2),
    teor: DataTypes.STRING(4),
    descricao: DataTypes.STRING
},
    { 
        timestamps: true, 
        freezeTableName: true,
        tableName: 'produto' // 👈 Garante que a tabela procurada seja 'produto'
    }
);

const Categoria = postgres.define("Categoria", {
    nome: DataTypes.STRING
},
    { 
        timestamps: true, 
        freezeTableName: true,
        tableName: 'categoria' // 👈 Garante que a tabela procurada seja 'categoria'
    }
);

const Cliente = postgres.define("Cliente", {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
},
    { 
        timestamps: true, 
        freezeTableName: true,
        tableName: 'cliente'
    }
);


const Venda = postgres.define("Venda", {
    ValorTotal: DataTypes.DECIMAL(10,2),
    DataVenda: DataTypes.DATEONLY
},
    { 
        timestamps: true, 
        freezeTableName: true,
        tableName: 'venda'
    }
);


const Compra = postgres.define("Compra", {
    valor: DataTypes.DECIMAL(10,2),
    data: DataTypes.DATEONLY
},
    { 
        timestamps: true, 
        freezeTableName: true,
        tableName: 'compra'
    }
);

const ItemCompra = postgres.define("ItemCompra", {
    PrecoUni: DataTypes.DECIMAL(10,2),
    SubTot: DataTypes.DECIMAL(10,2),
    quantidade: DataTypes.INTEGER
},
    { 
        timestamps: true, 
        freezeTableName: true,
        tableName: 'itemcompra' // Ou 'item_compra', dependendo da sua convenção
    }
);

const ItemVenda = postgres.define("ItemVenda", {
    SubTot: DataTypes.DECIMAL(10,2),
    quantidade: DataTypes.INTEGER
},
    { 
        timestamps: true, 
        freezeTableName: true,
        tableName: 'itemvenda' // Ou 'item_venda'
    }
);


// RELACIONAMENTOS (Sem alterações)

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

Produto.belongsTo(Categoria, {
    foreignKey: 'CategoriaId'
});


// ItemCompra
Compra.hasMany(ItemCompra);
ItemCompra.belongsTo(Compra);

Produto.hasMany(ItemCompra);
ItemCompra.belongsTo(Produto);


export {
    Categoria, Cliente, Compra,
    ItemCompra, ItemVenda,
    Produto, Venda
};