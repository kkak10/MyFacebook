import React from 'react'
import FacebookLoginButton from 'components/FacebookLoginButton'
import { FACEBOOK_APP_ID } from 'constants.js'

export default class Header extends React.Component {
  static propTypes = {};

  render() {
    return (
      <header>
        <h1>is Header</h1>
        <FacebookLoginButton />
      </header>
    );
  }
}