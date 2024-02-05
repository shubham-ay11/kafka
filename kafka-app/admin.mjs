import {kafkaClient} from './client.mjs';

const init = async () =>{
    const admin= kafkaClient.admin();
    console.log("admin connecting ......");
    admin.connect();
    console.log("Admin Connected");


   await  admin.createTopics({
        topics:[{
            topic:'updates',
        numPartition:2
        }]
    })
    console.log("topic created");
    await admin.disconnect();
    console.log("disconnected");


}

init();