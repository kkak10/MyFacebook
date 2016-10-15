/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { createSelector } from 'reselect';
import { selectLocale } from './selectors';
import FacebookAuth from 'utils/FacebookAuth'
import FacebookLoginButton from 'components/FacebookLoginButton'


export default class HomePage extends React.Component {
  componentWillMount() {
    FacebookAuth.init();
  }

  render() {
    return (
      <h1>
        <FacebookLoginButton />
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

HomePage.propTypes = {
  locale: React.PropTypes.string,
  messages: React.PropTypes.object,
};
