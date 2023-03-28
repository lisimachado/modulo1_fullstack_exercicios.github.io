import PropTypes from "prop-types";
import { useState } from "react";
import {GrupoInput} from "./GrupoInput";


const Formulario = (props) => {
	//usando useState/valor inicial vazio ou 0;
	//pegando valores do formulário com virtual Dom;
	const [data, setData] = useState("");
	const [valor, setValor] = useState(0);
	const [quantidade, setQuantidade] = useState(0);

	//Fução Handle é utilizada para chamar eventos
	//Neste caso irá adicionar uma negociação após o preenchimento e submit

	function handleAdicionarNegociacao() {
		const negociacao = {
			data: data,
			quantidade: quantidade,
			valor: valor,
		};
		props.quandoAdicionar(negociacao);

	//Limpar os campos após o submit:
		setData("");
    setQuantidade(0);
    setValor(0);

	}

	return(
		<form className="form container">
    <div className="row">
			
			{/*Adicionando o componente de GrupoInput e passando os devidos atributos*/}
			
			{/*Input de DATA */}			
			<GrupoInput 
				id="data"
				etiqueta="Data"
				tipo="text"
				aoDigitar={(evento) => setData(evento.target.value)}
				valor={data}			
			/>

			{/*Input de QUANTIDADE*/}
			<GrupoInput 
				id="quantidade"
				etiqueta="Quantidade"
				tipo="number"
				aoDigitar={(evento) => setQuantidade(evento.target.value)}
				valor={quantidade}
				min="1"
				step="1"
			/>

			{/*Input de VALOR */}
			<GrupoInput
			id="valor"
			etiqueta="Valor"
			tipo="number"
			aoDigitar={(evento) => setValor(evento.target.value)}
			valor={valor}
			min="0.01"
			step="0.01"
			/>





        <div className="col-1 d-flex align-items-end justify-content-end">
          <button 
					className="btn btn-primary" 
					type="button"
					//Adicionando o evento criado quando for chamado o submit
					onClick={handleAdicionarNegociacao}
					>Incluir
					</button>
        </div>
    </div>
</form>
	);
};


//Adicionando as props
Formulario.propTypes = {
  quandoAdicionar: PropTypes.func.isRequired,
};

export default Formulario;