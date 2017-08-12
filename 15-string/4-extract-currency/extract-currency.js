exports.extractCurrencyValue = extractCurrencyValue;

function extractCurrencyValue(str) {
  return +(str.slice(1));
}
