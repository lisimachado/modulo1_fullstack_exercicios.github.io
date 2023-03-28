import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import './index.css'

//importar as páginas
import Home from "./pages/Home"
import PaginaErro from './pages/PaginaErro'
import Sobre from "./pages/Sobre"

// 1 = [x] Criar o browser com as rotas

/* 3 = [] Criar a rota padrão */
const rotas = createBrowserRouter([
	
	{
		path: "/",
		element: <App />,
		errorElement: <PaginaErro />,
		children: [
			//Agora todas as rotas passam a ser colocadas aqui - rotas filhas
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/sobre",
				element: <Sobre />

			},
		]
	},
	

])


ReactDOM.createRoot(document.getElementById('root')).render(
	// 2 - [] Configurar o router provider

  <React.StrictMode>
		{/*Aqui também vai o context */}
		{/*coloca atributo router e adiciono a variável */}

		<RouterProvider router={rotas}> 
    <App />
		<Home />
		</RouterProvider>
  </React.StrictMode>,
)
