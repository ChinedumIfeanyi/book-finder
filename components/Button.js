import React from 'react'

const Button = ({ getBooks }) =>{
	return(
		<button onClick={ getBooks }>
			Search
		</button>
	)
}

export default Button