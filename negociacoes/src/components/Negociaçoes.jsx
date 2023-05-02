import { Form, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { IoTrashBinOutline } from 'react-icons/io5';
import { Alert } from 'react-bootstrap';
import './Negociaçoes.css';


//Cabeçalho da tabela de negociações
export function NegociacoesHeader() {
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

//Responsável por renderizar as negociações cadastradas
export function NegociacoesList({ negociacoes, handleDeleteNegociacao }) {
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

	//Função para pegar os valores dos inputs
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

	//Para deletar alguma negociação da tabela
	function handleDeleteNegociacao(negociacaoParaRemover) {
		const novasNegociacoes = negociacoes.filter(negociacao => negociacao !== negociacaoParaRemover);
		setNegociacoes(novasNegociacoes);

	}
	//Para chamar o alerta de que todos os campos devem ser preenchidos
	function handleCloseAlert() {
		setShowAlert(false);
	}

	return (
		//FORMULÁRIO
		<div>
			<Form class="form-container" onSubmit={handleNegociacaoSubmit}>
				<div className='row'>
					<InputGroup>
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
					</InputGroup>
					<div class="col-1 d-flex align-items-end justify-content-end">
						<button class="btn-primary" type="submit">Adicionar</button>
					</div>

				</div>
			</Form>

			{/* Função para que preencha todos os campos */}
			{
				showAlert && (
					<Alert variant="danger" onClose={handleCloseAlert} dismissible>
						Preencha todos os campos antes de adicionar uma negociação.
					</Alert>
				)
			}
			<table id='tabela'>
				<NegociacoesHeader />
				<NegociacoesList negociacoes={negociacoes} handleDeleteNegociacao={handleDeleteNegociacao} />
			</table>
		</div >
	);
}

export default Negociacoes;


