import {graphql, commitMutation} from 'react-relay';

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation LoginUserMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        token
    }
  }
`;

function commit(
  environment,
  username,
  password,
  callback
) {
  // Now we just call commitMutation with the appropriate parameters
  console.log('mutation commiting')
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        username: username,
        password: password
      },
      onCompleted: (response, errors) => {
        console.log('Response received from server.', response.login.token)
        callback(response.login.token)
      }
    }
  );
}

export default {commit};

// // 1
// import {
//   commitMutation,
//   graphql,
// } from 'react-relay'
// import environment from '../Environment'
//
// // 2
// const mutation = graphql`
//   mutation LoginUserMutation($input: UserDetailsInput!) {
//     login(input: $input) {
//         token
//     }
//   }
// `
//
// // 3
// export default (description, url, callback) => {
//   // 4
//   const variables = {
//     input: {
//       description,
//       url,
//       clientMutationId: ""
//     },
//   }
//
//   // 5
//   commitMutation(
//     environment,
//     {
//       mutation,
//       variables,
//       // 6
//       onCompleted: () => {
//         callback()
//       },
//       onError: err => console.error(err),
//     },
//   )
// }
