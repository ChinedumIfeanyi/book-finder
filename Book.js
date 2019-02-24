import React, { Component } from 'react'

// import BookCard from './components/BookCard'
import Search from './components/Search'


class Book extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			inputValue: '',
			error: ''
		}
	};
	getBooks(){
		console.log(this.state.inputValue)
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
			</div>

		)
	}
}


export default Book