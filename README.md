# express-gateway-plugin-hmac-request
This plugin for [Express Gateway](https://express-gateway.io) is used to set HMAC headers on a proxy request meaning a client making a request of the API gateway won't need to set any HMAC headers itself. *This plugin is NOT used to allow clients requesting the API gateway to authenticate using HMAC.*
## Installation

Simply type from your shell environment:

```bash
eg plugin install express-gateway-plugin-hmac-request
```

## Quick start

1. Make sure the plugin is listed in [system.config.yml file](https://www.express-gateway.io/docs/configuration/system.config.yml/).
This is done automatically for you if you used the command above.

2. Add the configuration keys to [gateway.config.yml file](https://www.express-gateway.io/docs/configuration/gateway.config.yml/).

```yaml
policies:
  -
    policies:
      - hmac:
          - action:
              serviceEndpoint: myEndpoint
              secretKey: abcdedfg123456
              publicKey: myPublicKey
              method: sha512
```

### Configuration Parameters
`action.serviceEndpoint`: The servcice endpoints that this action relates to, must be a service defined in the serviceEndpoints section of the config

`action.secretKey`: The HMAC secret key

`action.publicKey`: The HMAC publc key

`action.method`: The HMAC hashing method
