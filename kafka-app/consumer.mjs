import { kafkaClient } from './client.mjs';

const init = async () => {
    const consumer = kafkaClient.consumer({ groupId: 'my-group' });
    await consumer.connect();

    await consumer.subscribe({ topics: ['updates'], fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const key = message.key ? message.key.toString() : null;
            const value = message.value ? message.value.toString() : null;
            const headers = message.headers;

            console.log({
                key: key,
                value: value,
                headers: headers,
            });
        },
    });

    
}

init();
