import React from 'react'

const InputBox = ({ value, handleChange }) =>{
	return(
		<input 
			type="text" 
			value={ value }
			onChange={ handleChange }
			placeholder="Search"
		/>
	)
}

export default InputBox