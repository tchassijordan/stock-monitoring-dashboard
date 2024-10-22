const { mockTableData } = require('./data');

const routeHandler = (req, res) => {
  const reqSearchParams = req.query;

  // eslint-disable-next-line eqeqeq
  if (Object.keys(reqSearchParams).length == 0) {
    return res.json(mockTableData.slice(0, 10));
  }

  const { q, percentage_change, price } = reqSearchParams;

  const filteredData = mockTableData.filter((data) => {
    const matchName = q && !data.name.toLowerCase().includes(q.toLowerCase());
    const matchSymbol =
      q && !data.symbol.toLowerCase().includes(q.toLowerCase());
    const matchPercentageChange =
      data.changePercent > Number(percentage_change);
    const matchPrice = data.price > Number(price);

    if (matchName || matchSymbol) {
      return false;
    }

    if (percentage_change && matchPercentageChange) {
      return false;
    }

    if (price && matchPrice) {
      return false;
    }

    return true;
  });

  // Simulating a delay of 1 second
  setTimeout(() => {
    res.json(filteredData);
  }, 1000);
};

module.exports = { routeHandler };
