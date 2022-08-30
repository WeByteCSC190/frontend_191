import React, { Component } from 'react';
import '../sign-in-pages/log-out.css'; 
import WhiteLogo from "../images/mlo_white.png";

export default class LogOutPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <div className="mini-nav">
        <img
              src={WhiteLogo} //MLO Support Logo
              width="160"
              height="80"
              className="d-inline-block align-top"
              alt="MLO Support"
            />
        </div>
      
        <div className="logout-body">
        <h1 className="logout-message">You have logged out of MLO Support.</h1>
        <p>Sometimes, the account signs out for security purposes because of inactivity. 
            If that's the case, you may click the button below to log back in.
        </p>
        
        <a href="log-back-btn">Go to Login</a>
        </div>

        <div className="mini-footer">

        </div>
    
      </>
    )
  }
}
