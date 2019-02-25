import React from 'react'

import "./Button.css"

const Button = ({ getBooks }) =>{
	return(
		<button onClick={ getBooks } className="button">
			Search
		</button>
	)
}

export default Button