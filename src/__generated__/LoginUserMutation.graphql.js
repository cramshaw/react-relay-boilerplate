/**
 * @flow
 * @relayHash eaab9f1537dc68dbf16359a8acec4343
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginUserMutationVariables = {|
  username: string,
  password: string,
|};
export type LoginUserMutationResponse = {|
  +login: ?{|
    +token: ?string,
  |},
|};
*/


/*
mutation LoginUserMutation(
  $username: String!
  $password: String!
) {
  login(username: $username, password: $password) {
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "login",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username",
        "type": "String!"
      }
    ],
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "LoginUserMutation",
  "id": null,
  "text": "mutation LoginUserMutation(\n  $username: String!\n  $password: String!\n) {\n  login(username: $username, password: $password) {\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LoginUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '5aced2ece274faf8b8b2bc64d23333d6';
module.exports = node;
