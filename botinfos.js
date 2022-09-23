const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Gives the credits of the bot.'),
  async execute(interaction, client) {
    const embed = new client.discord.MessageEmbed()
      .setColor('6d6ee8')
      .setDescription('Developed by `UZI`\n\n[`Github`](https://github.com/NRA-UZI) | [`Twitch`](https://www.twitch.tv/nra_uzi) | [`Discord`](https://discord.gg/96mCwzw74z) | [`Youtube`](https://www.youtube.com/channel/UCs_l8NuHBnw4tnIil-iJPwQ)')
      .setFooter(client.user.tag, client.user.avatarURL())
      .setTimestamp();
    await interaction.reply({
      embeds: [embed]
    });
  },
};