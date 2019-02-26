import React from 'react'

import "./BookCard.css"

const BookCard = ({data}) =>{

	let Books;
	if(!data.length) {
		Books = <h2> Nothing to search.Please enter a search word </h2>
	}else {
		Books = data.map(book => {
			const imageLink = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
			const bookTitle = book.volumeInfo.title
			const bookPublisher = book.volumeInfo.publisher
			const author = book.volumeInfo.authors
			const bookLink = book.volumeInfo.previewLink

			return (

				<section key={book.id} className="book-data">
					<div className="book-item">
						<img src={ imageLink } alt="img presentation"/>
						<article>
							<h3>{bookTitle}</h3>
							<h3>{bookPublisher} </h3>
							<h3>{author} </h3>
							<a href={bookLink} target="_blank"> See this Book </a>
						</article>
					</div>
				</section>
			)
		})
	
	}
	
	return(
		<div className="books"> 
			{Books}
		</div>
	)

}

export default BookCard