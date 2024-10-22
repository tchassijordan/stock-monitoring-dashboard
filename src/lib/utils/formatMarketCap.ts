const formatMarketCap = (value: number | string): string => {
  const marketCap = Number(value) || 0;

  if (marketCap >= 1e12) {
    return (marketCap / 1e12).toFixed(1) + 'T';
  }

  if (marketCap >= 1e9) {
    return (marketCap / 1e9).toFixed(1) + 'B';
  }

  if (marketCap >= 1e6) {
    return (marketCap / 1e6).toFixed(1) + 'M';
  }

  return marketCap.toString();
};

export default formatMarketCap;
