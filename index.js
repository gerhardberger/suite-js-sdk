'use strict';

module.exports = {

  api: require('./api/'),
  Escher: require('escher-auth'),

  authentication: {
    koaMiddleware: require('./authentication/url/koa'),

    url: {
      getKoaMiddleware: require('./authentication/url/koa').getMiddleware
    },
    request: {
      getKoaMiddleware: require('./authentication/request/koa').getMiddleware
    }
  },

  translations: {
    koaMiddleware: require('./translations/middleware'),
    RenderDecorator: require('./translations/render-decorator'),
    Collect: require('./translations/collect'),
    Translator: require('./translations/translator')
  },

  lib: {
    dateHelper: require('./lib/date-helper'),
    passwordGenerator: require('./lib/password-generator'),
    request: require('./lib/api-request'),
    superadminChecker: require('./lib/superadmin-checker')
  }

};
