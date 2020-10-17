const search = require("yt-search");
const ytdl = require("ytdl-core-discord");

const execute = async (bot, msg, args) => {
  const s = args.join(" ");
  console.log(s);
  try {
    search(s, (err, res) => {
      if (err) throw err;
      if (res && res.videos.length > 0) {
        const song = res.videos[0];
        playSong(bot, msg, song);
        console.log(song);
      } else {
        return msg.reply("Música não encontrada");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const playSong = async (bot, msg, song) => {
  if (!song) {
    if (queue) {
      queue.connection.disconnect();
      bot.queues.delete(msg.member.guild.id);
    }
  }

  if (!msg.member.voice.channel) {
    return msg.reply(
      "Você precisa estar em um canal de voz para reproduzir a música."
    );
  }

  let queue = bot.queues.get(msg.member.guild.id);
  if (!queue) {
    const conn = await msg.member.voice.channel.join();
    queue = {
      volume: 10,
      connection: conn,
      dispatcher: null,
      songs: [song],
    };
    queue.dispatcher = await queue.connection.play(
      await ytdl(song.url, { highWaterMark: 1 << 25, filter: "audioonly" }),
      {
        type: "opus",
      }
    );

    queue.dispatcher.on("finish", () => {
      queue.songs.shift();
      playSong(bot, msg, queue.songs[0]);
    });

    bot.queues.set(msg.member.guild.id, queue);
    console.log(bot.queues);
  } else {
    queue.songs.push(song);
    bot.queues.set(msg.member.guild.id);
  }
};

module.exports = {
  name: "p",
  help: "Reproduz a música desejada na canal atual do usuário",
  execute,
};
