import * as React from 'react'
import * as ReactDOM from 'react-dom'
let g_puffin 

const p = x => {
	function mounted(){
		ReactDOM.render(x, this)
	}
	return g_puffin.element`<div mounted="${mounted}"/>`
}


export const entry = ({ Dialog, puffin }) => {
	g_puffin = puffin
	const my_dialog = new Dialog({
		title: 'Title',
		component(){
			function clicked(){
				alert("Clicked !")
			}
			
			return p(
				<div> 
					<p>React component ! </p>
					<button onClick={clicked}>Click me</button>
				</div>
			)
		}
	})
	
	my_dialog.launch()
}