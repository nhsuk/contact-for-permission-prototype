module.exports = config => (req, res, next) => {
  res.locals.serviceName = config.serviceName;

  next();
}

module.exports = config => (req, res, next) => {
  res.locals.welshServiceName = config.welshServiceName;

  next();
}
