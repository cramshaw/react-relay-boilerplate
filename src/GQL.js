import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

function GQLComponent({ data: { hello, username } }) {
  return (
    <h1>
      <p>
        { username }
      </p>
      { hello }
    </h1>
  )
}
// We then can use the graphql container to pass the query results returned by MY_QUERY
// to a component as a prop (and update them as the results change)
export default graphql(gql`
  query GQLAppQuery {
    hello
    username
  }
`)(GQLComponent);
