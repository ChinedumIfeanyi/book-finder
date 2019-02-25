import React, {Fragment} from 'react'

import Button from '../button/Button'
import InputBox from '../inputbox/InputBox'


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