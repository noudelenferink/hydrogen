export interface IEnvConfiguration {
  env: string,
  apiUrl: string,
  auth0_config: Auth0Config,
  defaultAuthResult: AuthResult,
}

export class Auth0Config {
  clientID: string;
  clientId: string;
  domain: string;
  packageIdentifier: string;
  responseType: string;
  scope: string;
  redirectUri: string;
  audience: string;
}

export class AuthResult {
  accessToken: string;
  expiresIn: number;
  idToken: string;
  scope: string;
  tokenType: string;
  reloadApp: boolean;
}