import React, { useState } from 'react'




const Login = () => {


    const sendData = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.pass.value;
        const response = await fetch('http://localhost:3100/login', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })

        const res = await response.json();
        alert(res.message);
        console.log("Server Response:", res);
    }

    return (

        <div>
            <h1>Login Form</h1>
            <form action="" onSubmit={sendData}>

                <label htmlFor="email">Email</label>
                <input type="email" name='email' required placeholder='Email' id='email' />

                <label htmlFor="pass">Password</label>
                <input type="password" name='pass' required placeholder='Password' id='pass' />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;