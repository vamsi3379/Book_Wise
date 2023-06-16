export const oktaConfig = {
    clientId: `0oa9httyvaMdgxxzl5d7`,
    issuer: `https://dev-78760789.okta.com/oauth2/default`,
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpCheck: true,
}