const plugins = require('./plugins');

module.exports.handleCommand = (message, client) => {
    const [command, ...args] = message.body.slice(1).split(' ');

    switch(command) {
        case 'alive':
            plugins.alive(message, client);
            break;
        case 'menu':
            plugins.menu(message, client);
            break;
        case 'video':
            plugins.video(message, client, args);
            break;
        case 'song':
            plugins.song(message, client, args);
            break;
        case 'autoReact':
            plugins.autoReact(message, client);
            break;
        default:
            message.reply("Unknown command.");
    }
};