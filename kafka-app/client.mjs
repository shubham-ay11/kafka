import { Kafka } from 'kafkajs';

export const kafkaClient = new Kafka({
    clientId: 'my-app',
    brokers: ['192.168.1.9:9092']
});
