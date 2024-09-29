const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = async (message, client, args) => {
    const videoUrl = args[0];
    if (!ytdl.validateURL(videoUrl)) {
        message.reply('Invalid YouTube URL.');
        return;
    }

    const info = await ytdl.getInfo(videoUrl);
    const videoTitle = info.videoDetails.title;
    const stream = ytdl(videoUrl, { filter: 'audioonly' });

    stream.pipe(fs.createWriteStream(`${videoTitle}.mp3`)).on('finish', () => {
        message.reply('Video downloaded successfully!');
    });
};