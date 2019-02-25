import React, {Fragment} from 'react'

import Button from '../button/Button'
import InputBox from '../inputbox/InputBox'

import "./Search.css"


const Search = (
	{getBooks, inputValue, handleChange}) =>{

	return (
		<section className="search">
			<h3> Book Finder </h3>
			<InputBox
			 value = { inputValue }
			 handleChange = { handleChange }
			/>
			<Button getBooks = { getBooks } />
		</section>
	)
}

export default Search