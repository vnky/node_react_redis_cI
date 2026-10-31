const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379
});

client.on("error", (err) => {
  console.error("Redis Error:", err);
});

client.set("username", "Venkatesh ds", (err) => {
  if (err) throw err;

  client.get("username", (err, value) => {
    if (err) throw err;
    console.log('value is', value);
  });
});

client.get("username", (err, value) => {
  if (err) throw err;
  console.log('get value is', value);
});

client.hset("spanish", "red", "rojo", (err) => {
    if (err) throw err;
    console.log('hset value is successful');
});
client.hset("spanish", "orange", "naranja", (err) => {
    if (err) throw err;
    console.log('hset value is successful');
});

client.hget("spanish", "red", (err, value) => {
    if (err) throw err;
    console.log('hget value is', value);
});

client.hgetall("spanish", (err, value) => {
    if (err) throw err;
    console.log('hgetall value is', value);
});

client.set('color', JSON.stringify({red: 'rojo', orange: 'naranja'}), (err) => {
    if (err) throw err;
    console.log('set value is successful');
});

client.get('color', (err, value) => {
    if (err) throw err;
    console.log('get value is', value);
});