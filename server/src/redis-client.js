import redis from 'redis';

const client = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    }
});

client.on('error', (err) => console.error('Redis error: ', err));
client.connect();

export default client;
