import React from 'react';
import LoginMutation from './LoginUserMutation'
import environment from './relay'
import {graphql, createFragmentContainer} from 'react-relay'

class Login extends React.Component {

  state = {}

  onChange = (key, value) => {
   this.setState({ [key]: value })
  }

  callback = (token) => {
    this.setState({ 'token': token})
  }

  handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist()
      LoginMutation.commit(
        environment,
        this.state.username,
        this.state.password,
        this.callback
      );
    }
  };

  render() {
    return (
      <div>
      <h1>
        Enter your username:
      </h1>
      <h2>
        <input type="text" onChange={evt => this.onChange('username', evt.target.value)} />
        <input type="password" onChange={evt => this.onChange('password', evt.target.value)} onKeyUp={this.handleKeyUp} />
      </h2>
      <h3>
        entered: {this.state.username}
        <br/>
        set by fragment: {this.props.details.username}
      </h3>
      <p>
        token: {this.state.token}
      </p>
      {this.state.token &&
      <h2>
        You are logged in!
      </h2>
      }
    </div>
      // <QueryRenderer
      //   environment={environment}
      //   query={graphql`
      //     query LoginHelloQuery {
      //       hello
      //       username
      //     }
      //   `}
      //   variables={{}}
      //   render={({error, props}) => {
      //     if (error) {
      //       return <div>Error!</div>;
      //     }
      //     if (!props) {
      //       return <div>Loading...</div>;
      //     }
      //     return <div>
      //     Username: {props.hello} {props.username}
      //     </div>;
      //   }}
      // />
    );
  }
}

export default createFragmentContainer(
  Login,
  graphql`
  # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    fragment Login_details on Query {
      hello
      username
    }
  `
)
