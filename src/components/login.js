import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import "./login.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter valid email or password');

    }

    const data = {
      email: email,
      password: password,
    };



    const response = await axios.post("https://test.e-prathibha.com/apis/login", data);
    console.log(response);
    console.log(response.data.data.Id)
    console.log(response.data.data.Token);


    const ServerKey = "3w99V63pW7tJ7vavGXtCKo8cp";
    const Token = response.data.data.Token
    const Id = response.data.data.Id;


    sessionStorage.setItem('server_key', ServerKey)
    sessionStorage.setItem("tokenu", Token)
    sessionStorage.setItem("id", Id);



    // console.log(Id);
    // console.log(Token);
    // console.log(ServerKey);



    if (response.data.status === 200) {

      alert("Login success")
      navigate('/getexamlist');


    } else {

      alert("Login credentials are invalid ")

    }
  }






  return (
    <div className='e1'>
      <h2 style={{ marginLeft: "150px" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div><br />

          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
        </div>
        <div >
          <label htmlFor="password">Password</label><br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div >
        <button type="submit">Login</button><br />
        <br></br>
        <p>Don't Have a Acount</p>
        <Link className='Link' to='/register'>Register Here</Link>
      </form>
    </div>
  )
}


export default Login;