import React from 'react'


const BookCard = ({data}) =>{

	const Books = data.map(book => {
		return (
			<div key={book.id}>
				<p>{book.volumeInfo.title}</p>
				<p>{book.volumeInfo.publisher} </p>
				<p>{book.volumeInfo.authors} </p>
				<img src={book.volumeInfo.imageLinks.thumbnail} />
			</div>
		)
	})

	return(
		<div> 
			{Books}
		</div>
	)

}

export default BookCard