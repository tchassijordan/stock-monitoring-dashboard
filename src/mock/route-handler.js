const { mockTableData } = require('./data');

const routeHandler = (req, res) => {
  const reqSearchParams = req.query;

  // eslint-disable-next-line eqeqeq
  if (Object.keys(reqSearchParams).length == 0) {
    // Simulate a slow network request
    return setTimeout(() => {
      res.json(mockTableData.slice(0, 10));
    }, 2_000);
  }

  // Simulate a slow network request
  setTimeout(() => {
    res.json(mockTableData);
  }, 2_000);
};

module.exports = { routeHandler };
