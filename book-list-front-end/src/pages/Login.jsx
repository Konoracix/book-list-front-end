import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login() {

useEffect(()=>{
	if(sessionStorage.getItem("eventMessage") == 'logout'){
		setLoginMessage('Successfully logged out')
	}
}, [])



	const navigate = useNavigate();

	const [fetchedData, setFetchedData] = useState({});

	const [loginMessage, setLoginMessage] = useState('');

	const [formData, setFormData] = useState({email: '', password: ''});

	function handleChange(e) {
		setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
	}

	function signUp(e){
		e.preventDefault();
		if(formData.email != '' && formData.password != ''){
			(async ()=>{
				const data = await axios({
					method: 'post',
					url: `http://localhost:5050/api/auth/login`, 
					data: {
						mail: formData.email,
						password: formData.password
					},
				});
				if(typeof(data.data.message) == typeof('')){
					setLoginMessage("Invalid data")
				} 
				else{
					setFetchedData(data.data);
					sessionStorage.setItem("token", data.data.message.token)
					navigate('/BooksList');
				}
			})()
		}
		else if(formData.email == ''){
			setLoginMessage('Missing email')
		}
		else if(formData.password == ''){
			setLoginMessage('Missing password')
		}
	}

	function changePasswordVisibility(){
		if(document.getElementById('id_password').type == 'password'){
			document.getElementById('id_password').type = 'text'
			return;
		}
		document.getElementById('id_password').type = 'password';
	}
	
  return (
	<div>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
		<img id="logo" src={require("../logo.png")}/>
		<h1>Sign in to Book List</h1>
		<div id='container'>
			<div id='loginSection'>
				<form>
					<br />
					<label>Email address</label>
					<br />
					<input onChange={handleChange} name="email" type="text"  />
					<br />
					<br />
					<label>Password</label>
					<br />
					<input type="password" onChange={handleChange} name="password" autoComplete="current-password" id="id_password"/>
 					<i class="far fa-eye" onClick={changePasswordVisibility} id="togglePassword"></i>
					{/* <input onChange={handleChange} name='password' type="password"  /> */}
					<br />
					<br />
					<br />
					
					<button id="signUpButton" onClick={signUp}>Sign in</button>
					<br />
					<br />
					<br />
					<label id="loginMessage">{loginMessage}</label>
				</form>
			</div>
		</div>
	</div>
  );
}

export default Login;
