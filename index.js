import React from 'react'
import ReactDOM from 'react-dom'
import Book from './Book'


ReactDOM.render(<Book />, document.getElementById('app'))

if(module.hot){
	module.hot.accept()
}