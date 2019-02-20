const crypto = require('crypto');
const { PassThrough } = require("stream");

module.exports = {
    name: 'hmacRequest',
    policy: (params, config) =>
        (req, res, next) => {
            const endpoint = config.gatewayConfig.serviceEndpoints[params.serviceEndpoint];
            req.egContext.requestStream = new PassThrough();
            req.pipe(req.egContext.requestStream);
            let data = '';
            req
                .on('data', (buf) => data += buf.toString())
                .on('error', (ex) => { throw new Error(ex) })
                .on('end', () => {
                    const hmac = crypto
                        .createHmac(params.method, params.secretKey)
                        .update(data || `${endpoint.url}${req.url}`)
                        .digest('hex');

                    req.headers['x-hash'] = hmac;
                    req.headers['x-public'] = params.publicKey;

                    next();
                });
        }
};
