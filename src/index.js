var mqtt = require("mqtt");
var save = require("./db");

var client = mqtt.connect(
  process.env.MQTT_HOST,
  { username: process.env.MQTT_USER, password: process.env.MQTT_PASSWORD }
);

client.on("connect", function() {
  client.subscribe("test", function(err) {
    if (err) {
      console.log("Unable to subscribe", err);
    }
  });
});

client.on("message", function(topic, message) {
  console.log(message.toString());
  var data = message.toString();
  save(data);
});
