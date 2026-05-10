const mineflayer = require('mineflayer')

console.log('Starting bot...')

const bot = mineflayer.createBot({
  host: 'Lifestealseason2.play.hosting',
  username: 'TheServerIsAlive',
  version: '1.21.11',
})

bot.once('spawn', () => {
  console.log('Moving forward...')
  bot.chat('/register inthedarklevel10')
  bot.chat('/login inthedarklevel10');
  bot.chat('/left')
})
bot.on('error', err => console.log('Error:', err))
bot.on('kicked', reason => console.log('Kicked:', reason))