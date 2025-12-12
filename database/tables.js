import { DataTypes } from "sequelize";
// 1. Alterar a importação para o arquivo de conexão PostgreSQL
import postgres from "./postgres.js"; // Assumindo que seu novo arquivo se chama postgres.js

// Nota sobre freezeTableName: Mantenho true, mas garanta que os nomes 
// no banco (ex: "Produto") sejam exatamente como o Sequelize espera, ou 
// defina tableName: 'produto' em cada modelo (Solução 1 da resposta anterior).

const Produto = postgres.define("Produto", { // 2. Usar a variável de conexão PostgreSQL
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10,2),
    teor: DataTypes.STRING(4),
    descricao: DataTypes.STRING

},
    { timestamps: true, freezeTableName: true }
);

const Categoria = postgres.define("Categoria", {
    nome: DataTypes.STRING
},
    { timestamps: true, freezeTableName: true }
);

const Cliente = postgres.define("Cliente", {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
},
    { timestamps: true, freezeTableName: true }
);


const Venda = postgres.define("Venda", {
    ValorTotal: DataTypes.DECIMAL(10,2),
    DataVenda: DataTypes.DATEONLY
},
    { timestamps: true, freezeTableName: true }
);


const Compra = postgres.define("Compra", {
    valor: DataTypes.DECIMAL(10,2),
    data: DataTypes.DATEONLY
},
    { timestamps: true, freezeTableName: true }
);

const ItemCompra = postgres.define("ItemCompra", {
    PrecoUni: DataTypes.DECIMAL(10,2),
    SubTot: DataTypes.DECIMAL(10,2),
    quantidade: DataTypes.INTEGER
},
    { timestamps: true, freezeTableName: true }
);

const ItemVenda = postgres.define("ItemVenda", {
    SubTot: DataTypes.DECIMAL(10,2),
    quantidade: DataTypes.INTEGER
},
    { timestamps: true, freezeTableName: true }
);


// RELACIONAMENTOS (Sem alterações necessárias, pois são independentes do tipo de DB)

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

// Sincronizar com o banco (Você pode adicionar a sincronização aqui)

export {
    Categoria, Cliente, Compra,
    ItemCompra, ItemVenda,
    Produto, Venda
};