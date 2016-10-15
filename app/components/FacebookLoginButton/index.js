import React from 'react'
import FacebookAuth from 'utils/FacebookAuth'

export default class FacebookLoginButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={FacebookAuth.login.bind(FacebookAuth)}>Facebook Login</button>
      </div>
    );
  }
}