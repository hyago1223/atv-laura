import mysql from "./mysql.js";
import {
  Produto,
  Categoria,
  Cliente,
  Venda,
  Compra,
  ItemCompra,
  ItemVenda
} from "./tables.js"; // ajuste o caminho conforme sua estrutura

async function seed() {
  try {
    // ====== CATEGORIAS ======
    const catEletronicos = await Categoria.create({ nome: "Eletrônicos" });
    const catBebidas = await Categoria.create({ nome: "Bebidas" });
    const catRoupas = await Categoria.create({ nome: "Roupas" });

    // ====== PRODUTOS ======
    const prod1 = await Produto.create({
      nome: "Smartphone",
      preco: 1999.90,
      descricao: "Smartphone moderno com 128GB",
      CategoriaId: catEletronicos.id
    });

    const prod2 = await Produto.create({
      nome: "Camiseta Básica",
      preco: 39.90,
      descricao: "Camiseta 100% algodão",
      CategoriaId: catRoupas.id
    });

    const prod3 = await Produto.create({
      nome: "Refrigerante Cola",
      preco: 7.50,
      descricao: "Lata 350ml",
      CategoriaId: catBebidas.id
    });

    // ====== CLIENTES ======
    const cli1 = await Cliente.create({
      nome: "Maria Silva",
      email: "maria@gmail.com",
      senha: "1234"
    });

    const cli2 = await Cliente.create({
      nome: "João Pedro",
      email: "joao@gmail.com",
      senha: "abcd"
    });

    // ====== VENDAS ======
    const venda1 = await Venda.create({
      ValorTotal: 2047.40,
      DataVenda: "2024-09-20",
      ClienteId: cli1.id
    });

    const venda2 = await Venda.create({
      ValorTotal: 79.80,
      DataVenda: "2024-09-21",
      ClienteId: cli2.id
    });

    // ====== ITENS DE VENDA ======
    await ItemVenda.create({
      VendaId: venda1.id,
      ProdutoId: prod1.id,
      quantidade: 1,
      SubTot: 1999.90
    });

    await ItemVenda.create({
      VendaId: venda1.id,
      ProdutoId: prod3.id,
      quantidade: 2,
      SubTot: 47.50
    });

    await ItemVenda.create({
      VendaId: venda2.id,
      ProdutoId: prod2.id,
      quantidade: 2,
      SubTot: 79.80
    });

    // ====== COMPRA (FORNECEDOR → LOJA) ======
    const compra1 = await Compra.create({
      valor: 5000.00,
      data: "2024-09-19"
    });

    // ====== ITENS DA COMPRA ======
    await ItemCompra.create({
      CompraId: compra1.id,
      ProdutoId: prod1.id,
      quantidade: 10,
      PrecoUni: 1500.00,
      SubTot: 15000.00
    });

    await ItemCompra.create({
      CompraId: compra1.id,
      ProdutoId: prod3.id,
      quantidade: 50,
      PrecoUni: 3.00,
      SubTot: 150.00
    });

    console.log("🎉 SEED FINALIZADO COM SUCESSO!");
  } catch (err) {
    console.error("Erro ao popular tabelas:", err);
  }
}

seed();
