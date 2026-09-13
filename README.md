# 🛒 Projeto E-commerce — Banco de Dados SQL

Projeto de **E-commerce desenvolvido com SQL**, criado com o objetivo de praticar e demonstrar conhecimentos em **modelagem de dados, criação de banco de dados, relacionamentos entre tabelas, consultas SQL e análise de informações comerciais**.

O projeto simula a estrutura de um comércio eletrônico, permitindo gerenciar produtos, clientes, pedidos, pagamentos e demais informações relacionadas às vendas.

---

## 🎯 Objetivo do Projeto

Construir um banco de dados relacional capaz de representar as principais operações de um E-commerce.

O projeto foi desenvolvido como parte do meu portfólio para demonstrar conhecimentos práticos em **SQL e Banco de Dados**.

Entre os principais objetivos estão:

* Criar uma estrutura de banco de dados organizada;
* Trabalhar com tabelas relacionadas;
* Aplicar chaves primárias e estrangeiras;
* Criar relacionamentos entre entidades;
* Inserir e manipular dados;
* Desenvolver consultas SQL;
* Utilizar filtros, ordenações e agrupamentos;
* Realizar análises de vendas;
* Extrair indicadores comerciais através de SQL.

---

## 🗄️ Estrutura do Banco de Dados

O banco foi estruturado utilizando diferentes entidades relacionadas ao funcionamento de um E-commerce.

### Principais tabelas

* **Clientes**
* **Produtos**
* **Categorias**
* **Pedidos**
* **Itens do Pedido**
* **Pagamentos**
* **Endereços**

Essas tabelas permitem representar o fluxo básico de uma venda:

```text
Cliente
   ↓
Pedido
   ↓
Itens do Pedido
   ↓
Produtos
   ↓
Categorias

Pedido
   ↓
Pagamento

Cliente
   ↓
Endereço
```

---

## 🔗 Relacionamentos

O projeto utiliza relacionamentos entre as tabelas para manter a integridade dos dados.

Exemplos:

```text
CLIENTES 1 ───── N PEDIDOS

PEDIDOS 1 ───── N ITENS_PEDIDO

PRODUTOS 1 ───── N ITENS_PEDIDO

CATEGORIAS 1 ───── N PRODUTOS

PEDIDOS 1 ───── 1 PAGAMENTOS

CLIENTES 1 ───── N ENDEREÇOS
```

### Conceitos utilizados

* Primary Key (PK)
* Foreign Key (FK)
* Relacionamento 1:N
* Relacionamento 1:1
* Integridade referencial
* Normalização de dados

---

## 💻 Tecnologias

* **SQL**
* **Banco de Dados Relacional**
* **SQL Server**
* Modelagem de dados
* Consultas SQL

---

## 📊 Consultas Desenvolvidas

O projeto também possui consultas para gerar informações úteis para análise do negócio.

### Exemplos de análises

**Produtos cadastrados**

```sql
SELECT *
FROM Produtos;
```

**Clientes cadastrados**

```sql
SELECT *
FROM Clientes;
```

**Pedidos realizados**

```sql
SELECT *
FROM Pedidos;
```

**Produtos por categoria**

```sql
SELECT 
    c.nome AS categoria,
    p.nome AS produto
FROM Categorias c
INNER JOIN Produtos p
    ON p.categoria_id = c.id;
```

**Total de vendas**

```sql
SELECT 
    SUM(valor_total) AS total_vendas
FROM Pedidos;
```

**Quantidade de pedidos por cliente**

```sql
SELECT 
    c.nome,
    COUNT(p.id) AS quantidade_pedidos
FROM Clientes c
LEFT JOIN Pedidos p
    ON p.cliente_id = c.id
GROUP BY c.nome;
```

**Produtos mais vendidos**

```sql
SELECT
    p.nome,
    SUM(ip.quantidade) AS quantidade_vendida
FROM Itens_Pedido ip
INNER JOIN Produtos p
    ON p.id = ip.produto_id
GROUP BY p.nome
ORDER BY quantidade_vendida DESC;
```

---

## 📈 Indicadores que podem ser extraídos

Através das consultas SQL, o banco permite gerar indicadores como:

* 💰 Faturamento total
* 🛒 Quantidade de pedidos
* 👥 Número de clientes
* 📦 Produtos vendidos
* 🏆 Produtos mais vendidos
* 📊 Ticket médio
* 🗂️ Vendas por categoria
* 👤 Clientes que mais compram
* 📅 Vendas por período
* 💳 Distribuição por forma de pagamento

---

## 🧠 Conceitos SQL praticados

Durante o desenvolvimento foram utilizados conceitos importantes de SQL, incluindo:

```text
CREATE DATABASE
CREATE TABLE
INSERT INTO
SELECT
WHERE
ORDER BY
GROUP BY
HAVING
INNER JOIN
LEFT JOIN
COUNT()
SUM()
AVG()
MIN()
MAX()
DISTINCT
CASE
```

O projeto também permite evoluir para consultas mais avançadas utilizando:

* Subqueries
* CTEs
* Views
* Functions
* Stored Procedures
* Window Functions
* Índices
* Triggers

---

## 📁 Estrutura sugerida do projeto

```text
ecommerce-sql/
│
├── README.md
│
├── database/
│   ├── 01_create_database.sql
│   ├── 02_create_tables.sql
│   ├── 03_insert_data.sql
│   └── 04_queries.sql
│
├── modelagem/
│   └── diagrama.png
│
└── consultas/
    ├── vendas.sql
    ├── produtos.sql
    ├── clientes.sql
    └── relatorios.sql
```

---

## 🚀 Possíveis evoluções

O projeto pode ser expandido para representar um sistema de E-commerce mais completo.

### Próximas etapas

* Criar uma API para comunicação com o banco;
* Desenvolver um Front-end;
* Criar sistema de login;
* Implementar controle de estoque;
* Adicionar carrinho de compras;
* Criar sistema de cupons;
* Implementar cálculo de frete;
* Criar dashboard de vendas;
* Integrar com Power BI;
* Criar relatórios automatizados.

---

## 📊 Dashboard

Os dados gerados pelo banco também podem ser utilizados posteriormente em ferramentas de análise e visualização, como **Power BI**, permitindo transformar as informações do E-commerce em um dashboard gerencial.

Exemplos de indicadores:

```text
Faturamento
     ↓
Pedidos
     ↓
Ticket Médio
     ↓
Produtos Mais Vendidos
     ↓
Clientes
     ↓
Categorias
```

---

## 🎓 Objetivo no Portfólio

Este projeto demonstra minha capacidade de trabalhar com **bancos de dados relacionais e SQL**, desde a estruturação das tabelas até a criação de consultas para extração de informações relevantes para o negócio.

O projeto também representa uma etapa prática dos meus estudos em **Banco de Dados, SQL e Análise de Dados**.

---

## 👨‍💻 Autor

**Tiago Silva**

Projeto desenvolvido para fins de **estudo, prática e portfólio profissional**.

---

⭐ Se este projeto foi útil ou interessante, considere deixar uma estrela no repositório.
