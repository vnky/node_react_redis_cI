const { clearCache } = require('../services/cache');

module.exports = async (req, res, next) => {
  await next(); // first it will run the route handler
  clearCache(req.user.id); // then it will clear the cache
}