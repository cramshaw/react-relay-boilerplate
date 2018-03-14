/**
 * @flow
 * @relayHash 212c701d312659aad99c915da9186d57
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppHelloQueryVariables = {| |};
export type AppHelloQueryResponse = {|
  +hello: ?string,
  +username: ?string,
|};
*/


/*
query AppHelloQuery {
  hello
  username
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "hello",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "username",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppHelloQuery",
  "id": null,
  "text": "query AppHelloQuery {\n  hello\n  username\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppHelloQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "AppHelloQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'b480a781e18e661d6d5ab00dfe86d287';
module.exports = node;
