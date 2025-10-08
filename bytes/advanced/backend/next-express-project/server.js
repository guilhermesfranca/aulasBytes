// Importação das dependências necessárias
const express = require('express');     // Framework web para Node.js - cria o servidor HTTP
const next = require('next');          // Framework React - para renderização e roteamento
const cors = require('cors');          // Middleware para permitir requisições de diferentes origens
const fs = require('fs');             // Sistema de ficheiros do Node.js - para ler/escrever arquivos

// Configuração do Next.js
const dev = process.env.NODE_ENV !== 'production';  // Verifica se está em modo desenvolvimento
const nextApp = next({ dev });                      // Cria instância do Next.js
const handle = nextApp.getRequestHandler();         // Handler para processar rotas do Next.js

// Criação da aplicação Express
const app = express();

// Configuração dos middlewares
app.use(cors());           // Permite requisições de qualquer origem (frontend pode aceder à API)
app.use(express.json());   // Permite processar JSON no body das requisições POST/PUT


// ===== BASE DE DADOS LOCAL =====
// Ficheiro JSON que funciona como base de dados simples
const DB_FILE = './db.json';

// Função para ler produtos do ficheiro JSON
function carregarProdutos() {
  if (!fs.existsSync(DB_FILE)) return [];                    // Se ficheiro não existe, retorna array vazio
  const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8')); // Lê e converte JSON para objeto
  return data.produtos || [];                                 // Retorna array de produtos ou array vazio
}

// Função para guardar produtos no ficheiro JSON
function guardarProdutos(produtos) {
  const data = { produtos };                                   // Cria objeto com array de produtos
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));   // Escreve no ficheiro com formatação (2 espaços)
}


// ===== ROTAS DA API REST =====

// GET /api/produtos - Buscar todos os produtos
app.get('/api/produtos', (req, res) => {
  res.json(carregarProdutos());  // Retorna todos os produtos em formato JSON
});

// GET /api/produtos/:id - Buscar produto específico por ID
app.get('/api/produtos/:id', (req, res) => {
  const produtos = carregarProdutos();                               // Carrega todos os produtos
  const produto = produtos.find(p => p.id === parseInt(req.params.id)); // Procura produto pelo ID
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' }); // Se não encontrar, retorna erro 404
  res.json(produto);  // Retorna o produto encontrado
});

// POST /api/produtos - Criar novo produto
app.post('/api/produtos', (req, res) => {
  const produtos = carregarProdutos();                        // Carrega produtos existentes
  const { nome, preco } = req.body;        // Extrai dados do body da requisição
  
  // Cria novo produto com ID auto-incrementado
  const novoProduto = {
    id: produtos.length ? produtos[produtos.length - 1].id + 1 : 1,  // ID = último ID + 1, ou 1 se for o primeiro
    nome,
    preco: parseFloat(preco),      // Converte string para número decimal
  };
  
  produtos.push(novoProduto);      // Adiciona ao array
  guardarProdutos(produtos);       // Guarda no ficheiro
  res.status(201).json(novoProduto); // Retorna produto criado com status 201 (Created)
});

// PUT /api/produtos/:id - Atualizar produto existente
app.put('/api/produtos/:id', (req, res) => {
  const produtos = carregarProdutos();                                    // Carrega todos os produtos
  const index = produtos.findIndex(p => p.id === parseInt(req.params.id)); // Encontra índice do produto
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado' }); // Se não encontrar, erro 404
  
  // Atualiza produto mantendo dados originais + dados novos (spread operator)
  produtos[index] = { ...produtos[index], ...req.body };
  
  guardarProdutos(produtos);       // Guarda alterações no ficheiro
  res.json(produtos[index]);       // Retorna produto atualizado
});

// DELETE /api/produtos/:id - Eliminar produto
app.delete('/api/produtos/:id', (req, res) => {
  let produtos = carregarProdutos();                                      // Carrega todos os produtos
  const index = produtos.findIndex(p => p.id === parseInt(req.params.id)); // Encontra índice do produto
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado' }); // Se não encontrar, erro 404
  
  produtos.splice(index, 1);         // Remove produto do array (splice remove 1 elemento no índice)
  guardarProdutos(produtos);         // Guarda array atualizado no ficheiro
  res.json({ mensagem: 'Produto eliminado com sucesso' }); // Confirma eliminação
});


// ===== INTEGRAÇÃO NEXT.JS + EXPRESS =====

// Middleware que passa todas as rotas não-API para o Next.js
// Qualquer rota que não seja /api/* será processada pelo Next.js (páginas React)
app.use((req, res) => {
  return handle(req, res);  // Next.js processa a rota e renderiza a página correspondente
});


// ===== INICIALIZAÇÃO DO SERVIDOR =====

const PORT = process.env.PORT || 3000;  // Usa porta do ambiente ou 3000 por defeito

// Prepara o Next.js e depois inicia o servidor Express
nextApp.prepare().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor Next.js + Express a correr em http://localhost:${PORT}`);
    console.log(`📡 API disponível em http://localhost:${PORT}/api/produtos`);
  });
});
