console.log("the bot is starting");

var Twit = require('twit');
var module = require('./module');
var T = new Twit(module);


setInterval(getTweet, 1000*60*45)

function getTweet(){
  T.get('search/tweets', { q: 'BlizzCon since:2011-09-01', count: 1 }, function(err, data, response) {
    var tweets = data.statuses;
    for(var i = 0; i < tweets.length; i++){
      tweetIt(tweets[i].text);
    }
  })
}

function tweetIt(txt){
  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response){
    if (err){
      console.log("something went wrong!");
      console.log(err)
    }else{
      console.log("It worked!");
    }
  }
}
