/**
 * Class to pull prices from cryptocompare website
 */

let xhr = new XMLHttpRequest();

const api_func = {
  //TODO: Get prices for EOS, DASH, BCH, NEO
  //Async function to retrieve crypto prices
  mainApp(data) {
    setInterval(function() {
      xhr.open(
        "GET",
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,BCH,EOS,NEO,DASH&tsyms=USD",
        true
      );
      xhr.send();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          data(JSON.parse(xhr.response));
        }
      };
    }, 10000);
  }
};

export default api_func;
