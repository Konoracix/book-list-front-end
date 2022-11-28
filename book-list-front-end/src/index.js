import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Login from './pages/Login';
import BooksList from './pages/Books/BooksList';

export default function App(){

	useEffect(()=>{
		if(sessionStorage.getItem("token") == "" && window.location.pathname != '/Login'){
			window.location.href = `${window.location.origin}/Login`;
		}
	}, []);

	return (
		<BrowserRouter>
		<Routes>
			<Route path='/Login' element={<Login/>}/>
			<Route path='/BooksList' element={<BooksList/>}/>
			
		</Routes>
		</BrowserRouter>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
