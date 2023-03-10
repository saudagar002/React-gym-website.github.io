


import React from 'react'
// import './style/Multi.css'

import "./style/multi.css"



const Multi = () => {
  return (
    

   
    <main id="main-holder">
    <h1 id="login-header">Login</h1>
    <div id="login-error-msg-holder">
      <p id="login-error-msg">
        Invalid username <span id="error-msg-second-line">and/or password</span>
      </p>
    </div>
    <form id="login-form">
      <input
        type="text"
        name="username"
        id="username-field"
        className="login-form-field"
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        id="password-field"
        className="login-form-field"
        placeholder="Password"
      />
      <input type="submit" defaultValue="Login" id="login-form-submit" />
    </form>
  </main>
  
    
  )
}

export default Multi