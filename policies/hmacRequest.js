const crypto = require('crypto');

module.exports = {
    name: 'hmacRequest',
    policy: (params, config) =>
        (req, res, next) => {
            const endpoint = config.gatewayConfig.serviceEndpoints[params.serviceEndpoint];
            const hmac = crypto
                .createHmac(params.method, params.secretKey)
                .update(req.rawBody || `${endpoint.url}${req.url}`)
                .digest('hex');

            req.headers['x-hash'] = hmac;
            req.headers['x-public'] = params.publicKey;

            next();
        }
};
