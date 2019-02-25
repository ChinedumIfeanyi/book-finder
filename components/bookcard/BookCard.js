import React from 'react'

import "./BookCard.css"

const BookCard = ({data}) =>{

	const Books = data.map(book => {
		return (
			<section className="book-data">
				<div key={book.id} className="book-item">
					<img src={book.volumeInfo.imageLinks.thumbnail} />
					<article>
						<h3>{book.volumeInfo.title}</h3>
						<h3>{book.volumeInfo.publisher} </h3>
						<h3>{book.volumeInfo.authors} </h3>
						<a href="#"> Checkout Book </a>
					</article>
				</div>
			</section>
		)
	})

	return(
		<div className="books"> 
			{Books}
		</div>
	)

}

export default BookCard