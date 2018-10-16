// No need for the line below if your environment already supports ES6 with JavaScript import/export
require('babel-register');

// change the line below to:
// const SteemBot = require('steem-bot').default
// or:
// import SteemBot from 'steem-bot';
const SteemBot = require('steem-bot').default;


const username = 'hybridbot';
const postingKey = 'Your Posting Key Here!'; // Use environment variables instead of hardcoding to be safer

const targetUsers = ['spydo', 'redlambo', 'peacebot', 'honestbot', 'votejar', 'bodzila', 'mercurybot','ptbot', 'msp-bidbot', 'stef', 'minnowvotes'];
const bot = new SteemBot({username, postingKey});

bot.onDeposit(targetUsers, handleDeposit);

function handleDeposit(data, responder) {
  Responder.sendSbd(0.001, @hybridbot service is now live, send at least 0.010 SBD or STEEM to @hybridbot with the post you want upvoted as the memo. 0.050 SBD or STEEM max bid. Delegate 100 SP to unlock automatic upvotes and get daily payouts!)
  console.log('recevied %s deposit from %s to %s!', data.amount, data.from, data.to);
  console.log(data.memo);
  // you get the money now give your service to user
}

bot.start();
