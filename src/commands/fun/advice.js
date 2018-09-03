const { RichEmbed } = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message, args) => {
  let { body } = await get('http://api.adviceslip.com/advice');
  let advice = JSON.parse(body);
  let embed = new RichEmbed()
  .setFooter('Powered by adviceslip.com')
  .setTimestamp()
  .setColor(color)
  .setTitle('Advice Slip #' + advice.slip.slip_id)
  .setDescription(advice.slip.advice);
  message.channel.send(embed);
}

exports.conf = {
  aliases: ['adviceslip'],
  cooldown: 7
}

exports.help = {
  name: 'advice',
  description: 'Get some random advice',
  usage: 'advice'
}
