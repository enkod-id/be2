const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const marketRoute = require('./market.route');
const storeRoute = require('./store.route');
const productRoute = require('./product.route');
const transactionRoute = require('./transaction.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/markets',
    route: marketRoute,
  },
  {
    path: '/stores',
    route: storeRoute
  },
  {
    path: '/products',
    route: productRoute
  },
  {
    path: '/transactions',
    route: transactionRoute
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
