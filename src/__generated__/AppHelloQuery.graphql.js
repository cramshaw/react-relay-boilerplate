/**
 * @flow
 * @relayHash 9cbc1dd4117cdab77bf5a8d187e935eb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Login_details$ref = any;
export type AppHelloQueryVariables = {| |};
export type AppHelloQueryResponse = {|
  +hello: ?string,
  +username: ?string,
  +$fragmentRefs: Login_details$ref,
|};
*/


/*
query AppHelloQuery {
  hello
  username
  ...Login_details
}

fragment Login_details on Query {
  hello
  username
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hello",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppHelloQuery",
  "id": null,
  "text": "query AppHelloQuery {\n  hello\n  username\n  ...Login_details\n}\n\nfragment Login_details on Query {\n  hello\n  username\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppHelloQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      v0,
      v1,
      {
        "kind": "FragmentSpread",
        "name": "Login_details",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppHelloQuery",
    "argumentDefinitions": [],
    "selections": [
      v0,
      v1
    ]
  }
};
})();
(node/*: any*/).hash = '4be29616e35c70d72a9b418d2d40f656';
module.exports = node;
