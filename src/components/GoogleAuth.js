import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '629152467127-ljenkmim9fk6va6peqr2m96m6a29j6i7.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.oauthChanged(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.oauthChanged);
      })
    });
  }
  oauthChanged = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={() => this.auth.signOut()} className="ui red google button">
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={() => this.auth.signIn()} className="ui red google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps =(state) => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);