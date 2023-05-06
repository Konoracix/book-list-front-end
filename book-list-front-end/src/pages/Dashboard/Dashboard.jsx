import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import TopMenu from '../Components/TopMenu/TopMenu'

function Dashboard() {
	
	const navigate = useNavigate();

	useEffect(()=>{
		if(sessionStorage.getItem("token") == "" ){
			window.location.href = `${window.location.origin}/Login`;
		}
	}, []);

	useEffect(fetchData, [])

	const [fetchedData, setFetchedData] = useState({});

	function fetchData(){
		const token = sessionStorage.getItem("token");
		const data = (async()=>{
			const data = await axios({
				method: 'get',
				url: `http://localhost:5050/api/auth/encodeUser/`.concat(token), 
				headers: {'authorization': `bearer ${token}`},
			})
			const userMail = data.data.mail;
			setFetchedData(userMail);
		})()
	}

	// function logout(){
	// 	(async() => {
	// 		await axios({
	// 			method: 'put',
	// 			url: `http://localhost:5050/api/auth/logout`, 
	// 			headers: {'authorization': `bearer ${sessionStorage.getItem("token")}`},
	// 		})
	// 	})()
	// 	sessionStorage.setItem("token", "")
	// 	sessionStorage.setItem("eventMessage", 'logout');
	// 	navigate('/Login');
	// }

	function viewUser(){
		navigate('/Profile');
	}
	function viewBookList(){
		navigate('/BookList');
	}


  return (
	
	<div className='body'>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
		{/* <div className='upperPanel'>
			<div className="styleClear"></div>
			<button id='logoutButton' onClick={logout}>Logout</button>
			<div className='userEmailLabel' onClick={viewUser}>
				<div className="styleClear"></div>
				<p><i class="far fa-user"></i>  {JSON.stringify(fetchedData).replace(/\"/g, "")}</p>
				
			</div>
			<img className="logo" src={require("../../logo.png")}/>
			<p className='title'>Online book list</p>
		</div> */}
		<TopMenu userMail={JSON.stringify(fetchedData).replace(/\"/g, "")} />
		<div className='mainContainer'>
			<div className='tileContainer'>
				<div className='tile first' onClick={viewBookList}> Book list</div>
				<div className='tile something'></div>
				<div className='tile third' onClick={viewUser} >My Profile</div>
				<div className='tile something'></div>
				<div className='tile something'></div>
			</div>
		</div>
	</div>
	);
}

export default Dashboard;
