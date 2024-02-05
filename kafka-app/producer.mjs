import { kafkaClient } from './client.mjs';

const init = async () => {
    const producer = kafkaClient.producer();

    console.log("Connecting Producer...");
    await producer.connect();
    console.log("Producer connected.");

    await producer.send({
        topic: "updates",
        messages: [
            { value: "Hi from Shubham" },
            { value: "Hi from Joshi" }
        ]
    });

    await producer.disconnect();
    console.log("Producer disconnected.");
}

init();
