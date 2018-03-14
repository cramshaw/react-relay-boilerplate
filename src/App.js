import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import Login from './Login'

import environment from './relay';

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppHelloQuery {
            hello
            username
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>
          Username: {props.hello} {props.username}
          <Login />
          </div>;
        }}
      />
    );
  }
}
