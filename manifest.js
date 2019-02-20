module.exports = {
    version: '1.0.2',
    policies: 'hmacRequest',
    init: function (pluginContext) {
        let policy = require('./policies/hmacRequest.js')
        pluginContext.registerPolicy(policy)
    }
}
