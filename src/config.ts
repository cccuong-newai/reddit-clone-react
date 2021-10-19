/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

/**
 * Client-side application settings for the local development environment.
 */
export const local = {
  // Core application settings
  app: {
    name: "Reddit Clone",
    origin: "http://localhost:3000",
    env: "local" as "local" | "test" | "prod",
  },
  // GraphQL API and OAuth endpoint(s)
  // https://github.com/kriasoft/node-starter-kit
  api: {
    origin: "http://localhost:5000",
    path: "/graphql",
  },
  // Firebase / Firestore (optional)
  // https://firebase.google.com/docs/firestore
  firebase: {
    authKey: "xxxxx",
    authDomain: "https://example.firebaseapp.com",
    projectId: "example",
  },
};

/**
 * Client-side application settings for the test / QA environment.
 */
export const test: typeof local = {
  app: {
    ...local.app,
    origin: "https://test.example.com",
    env: "test",
  },
  api: {
    ...local.api,
    origin: "https://us-central1.example-test.cloudfunctions.net",
  },
  firebase: {
    authKey: "xxxxx",
    authDomain: "https://example-test.firebaseapp.com",
    projectId: "example-test",
  },
};

/**
 * Client-side application settings for the production environment.
 */
export const prod: typeof local = {
  app: {
    ...local.app,
    origin: "https://reddit-clone.ducnguyen96.xyz",
    env: "prod",
  },
  api: {
    ...local.api,
    // origin: "https://api.ducnguyen96.xyz",
  },
  firebase: {
    authKey: "xxxxx",
    authDomain: "https://example.firebaseapp.com",
    projectId: "example",
  },
};

export type Config = typeof local;
export default { local, test, prod };
