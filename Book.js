import React, { Component } from 'react'

import BookCard from './components/bookcard/BookCard'
import Search from './components/search/Search'

//css
import './Book.css'

//mock data
//import Api from './MockData/Api'

//ajax http library
import axios from 'axios'

class Book extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			inputValue: '',
			error: ''
		}
	};

	//fetch books from server
	getBooks(){
		const url = this.props.url
		const inputValue = this.state.inputValue
		const bookUrl = url + inputValue

		//if search box is empty 
		//set state to empty
		//return 
		if(inputValue == ""){
			this.setState({
				data: []
			})
		}
		axios.get(bookUrl)
		.then(response => {
			const data = response.data.items
			this.setState({
				data
			})
		})
	}
	handleChange(evt){
		const inputValue = evt.target.value
		this.setState({
			inputValue
		})
	}
	render() {
		const data = this.state.data
		const inputValue = this.state.inputValue
		return (
			<div>

				<Search 
					getBooks = { this.getBooks.bind(this) }
					inputValue = { inputValue }
					handleChange = { this.handleChange.bind(this) }
				/>
				<hr />
				<section className="book-card">
					<BookCard data = { data }/>
				</section>
			</div>

		)
	}
}

Book.defaultProps = {
	url: `https:\/\/www.googleapis.com\/books\/v1\/volumes?q=`
}

export default Book