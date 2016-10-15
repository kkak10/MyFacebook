import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { FACEBOOK_APP_ID } from 'constants.js'

export default class Header extends React.Component{
  static propTypes = {};

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <header>
        <h1>is Header</h1>
        <FacebookLogin
          appId={FACEBOOK_APP_ID}
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook} />
      </header>
    );
  }
}