import React, { useState } from 'react';
import { format } from 'date-fns';
import { IoTrashBinOutline } from 'react-icons/io5';
import { Alert } from 'react-bootstrap';
import './Neggociaçoes.css';

function NegociacoesHeader() {
  return (
    <thead>
      <tr>
        <th>Data</th>
        <th>Quantidade</th>
        <th>Valor</th>
      </tr>
    </thead>
  );
}

function NegociacoesList({ negociacoes, handleDeleteNegociacao }) {
  const date = new Date();
  const formattedDate = format(date, 'dd/MM/yyyy');

  return (
    <tbody>
      {negociacoes.map((negociacao, index) => (
        <tr key={index}>
          <td>{formattedDate}</td>
          <td>{negociacao.quantidade}</td>
          <td>{negociacao.valor}</td>
          <IoTrashBinOutline
            onClick={() => handleDeleteNegociacao(negociacao)}
            className="delete-icon"
          />
        </tr>
      ))}
    </tbody>
  );
}

function Negociacoes() {
  const [negociacoes, setNegociacoes] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  function handleNegociacaoSubmit(event) {
    event.preventDefault();
    const [data, quantidade, valor] = event.target.elements;

    if (!data.value || !quantidade.value || !valor.value) {
      setShowAlert(true);
      return;
    }

    const negociacao = {
      data: new Date(data.value),
      quantidade: quantidade.value,
      valor: valor.value,
    };
    setNegociacoes([...negociacoes, negociacao]);
  }

  function handleDeleteNegociacao(negociacaoParaRemover) {
    const novasNegociacoes = negociacoes.filter(negociacao => negociacao !== negociacaoParaRemover);
    setNegociacoes(novasNegociacoes);
  }

  function handleCloseAlert() {
    setShowAlert(false);
  }
  
  return (
    <div>
      <form onSubmit={handleNegociacaoSubmit}>
        <label>
          Data:
          <input name="data" type="date" />
        </label>
        <label>
          Quantidade:
          <input name="quantidade" type="number" />
        </label>
        <label>
          Valor:
          <input name="valor" type="number" />
        </label>
        <button type="submit">Adicionar Negociação</button>
      </form>
      {showAlert && (
        <Alert variant="danger" onClose={handleCloseAlert} dismissible>
          Preencha todos os campos antes de adicionar uma negociação.
        </Alert>
      )}
      <table id='tabela'>
        <NegociacoesHeader />
        <NegociacoesList negociacoes={negociacoes} handleDeleteNegociacao={handleDeleteNegociacao} />
      </table>
    </div>
  );
}

export default Negociacoes;
