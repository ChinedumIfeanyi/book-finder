import React, { Component } from 'react'

import BookCard from './components/BookCard'
import Search from './components/Search'

//mock data
import Api from './MockData/Api'

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

	componentDidMount(){
		this.setState({
			data: Api
		})
	}

	//fetch books from server
	getBooks(){
		const url = this.props.url
		const inputValue = this.state.inputValue
		const bookUrl = url + inputValue

		// axios.get(bookUrl)
		// .then(response => {
		// 	console.log(response.data.items)
		// })
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
				<BookCard data = { data }/>
			</div>

		)
	}
}

Book.defaultProps = {
	url: `https:\/\/www.googleapis.com\/books\/v1\/volumes?q=`
}

export default Book