// next-css is outdated module and now nextjs supports CSS out of the box.
const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}