import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import TopMenu from '../Components/TopMenu/TopMenu'
import React from 'react';
import LeftColumn from '../Components/LeftColumn/LeftColumn';
import RightColumn from '../Components/RightColumn/RightColumn';
import Site1 from '../Components/SiteType1/Site1';

function Profile() {
	
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
	const userMail = JSON.stringify(fetchedData).replace(/\"/g, "");

	function viewUser(){
		navigate('/Profile');
	}
	function viewBookList(){
		navigate('/BookList');
	}

	function viewDashboard() {
		navigate('/Dashboard')
	}

  return (
	
	<div className='body'>
		<TopMenu userMail={userMail} />
		<Site1 userMail={userMail} item1="Moje dane" item2="?" cmd1={() => {navigate('/Dashboard')}}/>
		<div className='median'></div>
		{/* zrób tabsy, zeby sie zmienialy moje dane i ustawienia nie przez inna strone tylko przez ta, ogarnij cos z renderem */}
	</div>
	);
}

export default Profile;
