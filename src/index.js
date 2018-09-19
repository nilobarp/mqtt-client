var mqtt = require("mqtt");
var save = require("./db");

var client = mqtt.connect(
  "mqtt://35.197.120.174",
  { username: "uts", password: "7gtX9bcL" }
);

client.on("connect", function() {
  client.subscribe("test", function(err) {
    if (!err) {
      client.publish("test", "Hello mqtt");
    }
  });
});

client.on("message", function(topic, message) {
  // message is Buffer
  console.log(message.toString());
  var data = message.toString();
  save(data);
});
