import React, {Fragment} from 'react'

import Button from './Button'
import InputBox from './InputBox'


const Search = (
	{getBooks, inputValue, handleChange}) =>{

	return (
		<Fragment>
			<h3> Book Finder </h3>
			<InputBox
			 value = { inputValue }
			 handleChange = { handleChange }
			/>
			<Button getBooks = { getBooks } />
		</Fragment>
	)
}

export default Search