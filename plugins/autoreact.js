module.exports = (message, client) => {
    client.sendMessage(message.from, '👍');
};