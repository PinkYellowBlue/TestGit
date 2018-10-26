'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://apitest.letterbook.cn/letter-cms/"',
})
//http://apitest.letterbook.cn/letter-cms/
//http://192.168.1.48:8086/letter-cms/
//http://115.159.58.129:3333/api/