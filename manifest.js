module.exports = {
    version: '1.0.0',
    policies: 'hmacRequest',
    init: function (pluginContext) {
        let policy = require('./policies/hmac.js')
        pluginContext.registerPolicy(policy)
    }
}
