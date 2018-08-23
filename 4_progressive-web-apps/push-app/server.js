var request = require('request');

var serverKey =
  "key=" + "AAAAojoE1YI:APA91bFYY4ktfgTBBD5nHfK3b65pEoI8UsrKrPavlLSviWjwhmE8LCPOhr-EvOt3JG3q1DXERTSpQ3Yh5BXeYGfmdiq2oZQkwDZdXQDDO3HT6yqClJrjfzDpZLiyAmIF6LTdgD2lVJSzvTmN-WjYNyLMYML12DruLw";
var deviceKey =
  "eYGkcyvk0S4:APA91bFpNs6jqGSsMrgjySSeh0RUylUbZ4u2MD1URtWNYq568jWtHmTPTvakXVcca4zYEgUHhToEngpcEx6umeajo1NaBm-IbsNLDplbYoIaoeLP_qxX68bXK25D3hIo6l1XMUAcYs8GpcnLPdRp79Ok08q2ZYa5gQ";
sendMessageToUser(serverKey, deviceKey);

function sendMessageToUser(serverKey, deviceKey, message) {
  console.log(serverKey)
  console.log(deviceKey)
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': serverKey,
    },
    body: JSON.stringify(
      {
        "registration_ids": [
          deviceKey
        ]
      }
    )
  }, function(error, response, body) {
    console.log("Result Log - ", body);
    if (error) {
      console.error(error, response, body);
    } else if (response.statusCode >= 400) {
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body);
    } else {
      console.log('Done!');
    }
  });
};
