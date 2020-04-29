const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis);

const insertMetrics = async () => {

  const client = redis.createClient({
    host: 'localhost',
    port: 6379,
  });

  const pipeline = client.batch();
  const key = 'hw2.5';

  pipeline.set(key, 3);
  pipeline.incrby(key, 3);
  pipeline.get(key);

  const results = await pipeline.execAsync();
  console.log(results);

  client.quit();
};

try {
  insertMetrics();
} catch (e) {
  console.log(e);
}
