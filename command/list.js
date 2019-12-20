'use strict'

const config = require('../templates')

module.exports = () => {
    let keys = Object.keys(config.tpl)
    let list = []
    for (let key of keys) {
        let value = config.tpl[key]
        let result = {
            command: key,
            name: value.desc
        }
        list.push(result)
    }

    console.log(list)

    process.exit()

}