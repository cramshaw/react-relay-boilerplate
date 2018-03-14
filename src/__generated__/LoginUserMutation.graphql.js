/**
 * @flow
 * @relayHash 1ddd968ad2257c65c218ff18e989a694
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
    id
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "LoginUserMutation",
  "id": null,
  "text": "mutation LoginUserMutation(\n  $username: String!\n  $password: String!\n) {\n  login(username: $username, password: $password) {\n    token\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LoginUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "login",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginUserMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "login",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '5aced2ece274faf8b8b2bc64d23333d6';
module.exports = node;
