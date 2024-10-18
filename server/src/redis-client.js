import redis from 'redis';

const client = redis.createClient();

client.on('error', (err) => console.error('Redis error: ', err));
client.connect();

export default client;
