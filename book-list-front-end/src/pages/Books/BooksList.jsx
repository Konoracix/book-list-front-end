import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BooksList.css';

function BooksList() {
	
	const navigate = useNavigate();

	useEffect(fetchData, [])

	const [fetchedData, setFetchedData] = useState({});

	function fetchData(){
		console.log(sessionStorage.getItem("bleblebleblebleblebleble"))
		const token = sessionStorage.getItem("token");
		const data = (async()=>{
			const data = await axios({
				method: 'get',
				url: `http://localhost:5050/api/book`, 
				headers: {'authorization': `bearer ${token}`},
			})
			setFetchedData(data.data)
		})()
		console.log(fetchedData)
	}

	function logout(){
		(async() => {
			await axios({
				method: 'put',
				url: `http://localhost:5050/api/auth/logout`, 
				headers: {'authorization': `bearer ${sessionStorage.getItem("token")}`},
			})
		})()
		sessionStorage.setItem("token", "")
		sessionStorage.setItem("eventMessage", 'logout');
		navigate('/Login');
	}

  return (
	<div>
		<p id="fetchedData">{JSON.stringify(fetchedData)}</p>
		<button id='logoutButton' onClick={logout}>Logout</button>
	</div>
  );
}

export default BooksList;
