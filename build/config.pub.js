const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'toutiao2uniapp': utils.resolve('toutiao2uniapp/index.js')
        }
    },
}