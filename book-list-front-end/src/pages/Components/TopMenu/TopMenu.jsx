import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
// import '../Components/TopMenu/TopMenu.css'
import './TopMenu.css'
import logo from "../../../logo.png";


function TopMenu(props) {
	const navigate = useNavigate();

	function logout() {
		(async() => {
			await axios({
				method: 'put',
				url: `http://localhost:5050/api/auth/logout`, 
				headers: {'authorization': `bearer ${sessionStorage.getItem("token")}`},
			})
		})()
		sessionStorage.setItem("token", "")
		sessionStorage.setItem("eventMessage", 'logout');
		navigate('/Login')
	}
	
	return (
		
		<div className='topMenuBody'>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
			<div className='upperPanel'>
				<div className="styleClear"></div>
				<button id='logoutButton' onClick={logout}>Logout</button>
				<div className='userEmailLabel' onClick={() => {navigate('/Profile')}}>
					<div className="styleClear"></div>
					<p className='userContainer'><i id="user-icon"className="far fa-user"></i>{props.userMail}</p>
				</div>
				<div className='mainpage'>
					<img className="logo" src={logo}/>
					<p className='title' onClick={() => {navigate('/Dashboard')}}> Online book list</p>
					<p className='subpageTitle'>My Booklist</p>
					<p className='subpageTitle'>....</p>
					<p className='subpageTitle'>....</p>
				</div>
			</div>
		</div>
		);

	// fetchData(){
		
    	
	// 	const token = sessionStorage.getItem("token");
	// 	const data = (async()=>{
	// 		const data = await axios({
	// 			method: 'get',
	// 			url: `http://localhost:5050/api/auth/encodeUser/`.concat(token), 
	// 			headers: {'authorization': `bearer ${token}`},
	// 		})
	// 		const userMail = data.data.mail;
	// 		this.setState({userMail: userMail});
	// 	})()
	// };

	// logout(){
	// 	(async() => {
			
	// 		await axios({
	// 			method: 'put',
	// 			url: `http://localhost:5050/api/auth/logout`, 
	// 			headers: {'authorization': `bearer ${sessionStorage.getItem("token")}`},
	// 		})
	// 	})()
	// 	sessionStorage.setItem("token", "")
	// 	sessionStorage.setItem("eventMessage", 'logout');
		
	// };

	// viewUser(){
	// 	// navigate = useNavigate();
	// 	// navigate('/Profile');
	// };
}

export default TopMenu;
