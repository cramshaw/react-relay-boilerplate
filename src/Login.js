import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LoginComponent extends Component {

  state = {}

  onChange = (key, value) => {
   this.setState({ [key]: value })
  }
  handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist()
      this.props.mutate({
        variables: {
          username: this.state.username,
          password: this.state.password
        }
      })
      .then( res => {
        console.log(res)
        // This should set the token in local storage or as a cookie.
        // It is then passed either automatically or in the environment as a header
        this.setState({
          token: res.data.login.token
        })
        evt.target.value = '';
      })
    }
  }

  render () {
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
    )
  }
}
// We then can use the graphql container to pass the query results returned by MY_QUERY
// to a component as a prop (and update them as the results change)


// Complete the mutation stuff here
const loginMutation = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`

const LoginWithMutation = graphql(
  loginMutation
)(LoginComponent)

export default LoginWithMutation
