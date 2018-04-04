/**
 * 
 */

let xhr = new XMLHttpRequest();

const api_func = {
  mainApp(data) {
    setInterval(function(){
      xhr.open('GET', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD', true)
      xhr.send();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          data(JSON.parse(xhr.response));
        }
      }
    }, 10000)
  },

}

export default api_func;