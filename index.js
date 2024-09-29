const { Client, LocalAuth } = require('whatsapp-web.js');
const config = require('./config');
const commandHandler = require('./command');

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {
    if (message.body.startsWith('.')) {
        commandHandler.handleCommand(message, client);
    }
});

client.initialize();