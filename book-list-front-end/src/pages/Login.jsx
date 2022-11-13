import './Login.css';

function Login() {
  return (
	<div>
		<img id="logo" src={require("../logo.png")}/>
		<h1>Sign in to Book List</h1>
		<div id='container'>
			<div id='loginSection'>
				<form>
					<br />
					<label>Email address</label>
					<br />
					<input type="text"  />
					<br />
					<br />
					<label>Password</label>
					<br />
					<input type="password"  />
					<br />
					<br />
					<br />
					<button id="signUpButton">Sign in</button>
					<br />
				</form>
			</div>
		</div>
	</div>
  );
}

export default Login;
