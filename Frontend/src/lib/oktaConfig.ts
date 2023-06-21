export const oktaConfig = {
    clientId: `0oa9httyvaMdgxxzl5d7`,
    issuer: `https://dev-78760789.okta.com/oauth2/default`,
    redirectUri: `${process.env.OKTA_LOGIN_URL_CALLBACK}`,
    // redirectUri: 'https://ec2-18-189-18-248.us-east-2.compute.amazonaws.com/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpCheck: true,
}