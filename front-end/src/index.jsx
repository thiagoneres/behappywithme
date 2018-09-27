import React from 'react' // importações
import ReactDOM	from 'react-dom'
import	'./img/favicon.ico'; //chamando a imagem para ela ser carregada no dist
import	'./css/index.css';//importando o css
import	'./css/pure-min.css';//importando o css para dist

ReactDOM.render(
			<h1>Bem-vindo	ao	React!</h1>,
			document.querySelector("#main")
)