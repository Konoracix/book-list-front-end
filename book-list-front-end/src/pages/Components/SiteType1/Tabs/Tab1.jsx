import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Tab1(props) {
	const navigate = useNavigate();
	
	useEffect(()=>{
		if(sessionStorage.getItem("token") == "" ){
			window.location.href = `${window.location.origin}/Login`;
		}
	}, []);

	useEffect(fetchData, [])
	
	const [userData, setUserData] = useState({});
	const [userMail, setUserMail] = useState();
	const [userName, setUserName] = useState();
	const [userAddress, setUserAddress] = useState({})
	

	function fetchData(){
		const token = sessionStorage.getItem("token");
		const data = (async()=>{
			const data = await axios({
				method: 'get',
				url: `http://localhost:5050/api/auth/encodeUser/`.concat(token), 
				headers: {'authorization': `bearer ${token}`},
			})
			const userMail = data.data.mail;
			setUserMail(userMail);
			const userData = await axios({
				method: 'get',
				// url: `http://localhost:5050/api/user/`.concat(JSON.stringify(userMail).replace(/\"/g, "")), 
				url: `http://localhost:5050/api/user/`.concat(JSON.stringify(userMail).replace(/\"/g, "")), 
				headers: {'authorization': `bearer ${token}`},
			})
			setUserData(userData.data);
			const userAddress = await axios({
				method: 'get',
				// url: `http://localhost:5050/api/user/`.concat(JSON.stringify(userMail).replace(/\"/g, "")), 
				url: `http://localhost:5050/api/user/address/`.concat(JSON.stringify(userMail).replace(/\"/g, "")), 
				headers: {'authorization': `bearer ${token}`},
			})
			setUserAddress(userAddress.data);
		})()
	}

	function fetchUserData() {
		const token = sessionStorage.getItem("token");
		const userData = (async()=>{
			const userData = await axios({
				method: 'get',
				// url: `http://localhost:5050/api/user/`.concat(JSON.stringify(userMail).replace(/\"/g, "")), 
				url: `http://localhost:5050/api/user/`.concat(JSON.stringify(userMail).replace(/\"/g, "")), 
				headers: {'authorization': `bearer ${token}`},
			})
			setUserData(userData.data);
			setUserName(userData.name)
		})()
	}

	return (
		<div className='tab1'>
			Name: {userData.name}
			<br/><br/>
			Surname: {userData.surname}
			<br/><br/>
			Mail: {userData.mail}
			<br /><br/>
			Telephone Number: {userData.phone_number}
			<br /><br/>
			Country: {userAddress.country}
			<br /><br/>
			Address: {userAddress.house_number ? userAddress.street : userAddress.street_number} {userAddress.house_number ? userAddress.street_number : userAddress.street}{userAddress.house_number ? "/"+userAddress.house_number : " Str"} , {userAddress.postcode} {userAddress.city}
			{/* Surname: {JSON.stringify(fetchedData.surname).replace(/\"/g, "")} */}
			{/* Mail: {JSON.stringify(fetchedData.mail).replace(/\"/g, "")} */}
			{/* Telephone Number: {JSON.stringify(fetchedData.phone_number).replace(/\"/g, "")} */}
		</div>
		);
}

export default Tab1;
