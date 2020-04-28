const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis);

const runApplication = async () => {
  // Connect to Redis.
  const client = redis.createClient({
    host: 'localhost',
    port: 6379,
  });

  // await client.saddAsync('planets', 'Mars');
  // await client.saddAsync('planets', 'Earth');
  // await client.saddAsync('planets', 'Saturn');
  //
  // const r = client.sismemberAsync('planets', 'Earth');
  // console.log(r);

  await client.hmsetAsync('hw1.3', {
    name: 'Jane Doe',
    age: 42
  });

  const person = await client.hgetallAsync('hw1.3');

  console.log(`${typeof(person)}, ${typeof(person.name)}, ${typeof(person.age)}`);


  // Clean up and allow the script to exit.
  client.quit();
};

try {
  runApplication();
} catch (e) {
  console.log(e);
}
