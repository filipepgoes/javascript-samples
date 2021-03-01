Sample of React authentication using [CAS Single Sign-on](https://github.com/apereo/cas), the [react-cas-client library](https://www.npmjs.com/package/react-cas-client) and [Microsoft IIS](https://www.iis.net/).

1. Add to the hosts file:
```
 127.0.0.1 react-cas-authentication-example
 XXX.XXX.XXX.XXX your-cas-instance
```
2. Create a IIS website, with https binding. The standard IIS Development certificate may be used. Install the Application Request Routing add-on in order to be able to write Reverse Proxy rules. Add the 2 Reverse Proxy rules from the web.config file provided (a port translating rule to show port 3000 in port 443 and a proxy to the cas server to validate the cas ticket without violating CORS).

3. Add react-cas-authentication-example to the CAS list of allowed services, according to your cas instance specificities.

4. Run:

```
yarn install
yarn start
```

5. Navigate to https://react-cas-authentication-example
