/**
 * Tutorial link - https://hackernoon.com/build-a-cryptocurrency-price-tracker-in-5-minutes-d66c3d37ad71
 * Class is based on the approach implemented by Joe Hanson in the above tutorial
 */


const PubNub = require('pubnub')
let pubnub = new PubNub({
  publishKey:   'pub-c-33a2ae63-300b-40a1-ba2b-a54f9ff210a5',
  subscribeKey: 'sub-c-43036b5c-380c-11e8-8e6f-1abf34272f4e'
});
let xhr = new XMLHttpRequest();

api_func = {

}

export default api_func;