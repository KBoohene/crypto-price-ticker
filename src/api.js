/**
 * Tutorial link - https://hackernoon.com/build-a-cryptocurrency-price-tracker-in-5-minutes-d66c3d37ad71
 * Class is based on the approach implemented by Joe Hanson in the above tutorial
 */

let xhr = new XMLHttpRequest();

const api_func = {
  mainApp(data) {
    setInterval(function(){
      xhr.open('GET', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD', true)
      xhr.send();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          data(xhr.responseText);
        }
      }
    }, 10000)
  },

}

export default api_func;