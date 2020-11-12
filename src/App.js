import React from 'react';

const App = () => {
  const mario = {
    nome: 'Mario',
    idade: '50 anos',
    compras: [
      { nome: 'notebook', preco: 1000 },
      { nome: 'geladeira', preco: 2000 },
    ],
    ativa: false,
  };
  const maria = {
    nome: 'Maria',
    idade: '35 anos',
    compras: [
      { nome: 'notebook', preco: 3000 },
      { nome: 'geladeira', preco: 4000 },
    ],
    ativa: true,
  };
  const jose = {
    nome: 'Jose',
    idade: '75 anos',
    compras: [
      { nome: 'notebook', preco: 6000 },
      { nome: 'geladeira', preco: 7000 },
    ],
    ativa: false,
  };

  const clienteAtual = jose;

  const totalCompras = clienteAtual.compras.map((item) => item.preco).reduce((a, b) => a + b);
  console.log(totalCompras);

  const estiloAtivo = {
    color: 'greewn',
    fontSize: '10px',
    fontFamily: 'Helvetica',
  };
  const estiloNegativo = {
    color: 'red',
    fontSize: '15px',
    fontFamily: 'Helvetica',
  };

  return (
    <>
      <p>Nome: {clienteAtual.nome}</p>
      <p>Idade: {clienteAtual.idade}</p>
      <p>
        {' '}
        Situação:
        <span style={{ color: clienteAtual.ativa ? 'green' : 'red' }}> {clienteAtual.ativa ? 'Ativa' : 'inativa'}</span>
      </p>
      <p>Valor total das compras: {totalCompras}</p>
      <p>{totalCompras > 5000 ? <p>Você passou do limite</p> : <p>Voce esta dentro do limite</p>}</p>
    </>
  );
};

export default App;
