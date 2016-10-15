import React from 'react'
import FacebookLoginButton from 'components/FacebookLoginButton'

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