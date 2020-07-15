'use strict';

const { Contract } = require('fabric-contract-api');
class Message extends Contract {
    async initLedger(ctx) {
        const msg = [
            {
                sender: 'inomp',
                receiver: 'fabric',
                message: 'Hello jjh1!',
                datetime: '2020-05-15 23:48:33'
            },
            {
                sender: 'fabric',
                receiver: 'inomp',
                message: 'Hello jjh2!',
                datetime: '2020-05-15 23:49:00'
            }
        ];
        for (let i = 0; i < msg.length; i++) {
            await ctx.stub.putState('MSG' + i, Buffer.from(JSON.stringify(msg[i])));
        }
    }

    async createMsg(ctx, key, sender, receiver, message, datetime){
        const msg = {
            sender,
            receiver,
            message,
            datetime,
        };
        await ctx.stub.putState(key, Buffer.from(JSON.stringify(msg)));
    }

    async queryAllMsgs(ctx) {
        const startKey = 'MSG0';
        const endKey = 'MSG999';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

}

module.exports.Message = Message;
module.exports.contracts = [ Message ];
