import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tweetname from './components/tweetname.js';
import Timemsg from './components/timemsg.js';
import twit from 'twitter';
import twitterScreenName from 'twitter-screen-name';

var client = new twit({
  consumer_key: 'ECjBxN2JZ2Sie1hpf13ht8egB',
  consumer_secret: 'Lir1Y3ZskpKHMGAmijSKzYWZnGqcg3FN8P78YFNT1sIlX2dLEa',
  access_token_key: '1276372249474293761-ZlYmE848tUw1WYwXMAxG786wN8cM1k',
  access_token_secret: 'uckqvL8Xm6n8l29ZIq5B01BMWztBb8GVsVj1xNx7smx5A'
});
var handle = twitterScreenName('https://twitter.com/SChumbar');
var params = { screen_name: handle };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

const stylez = { backgroundColor:'#282c34'}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to TweetCloud</h1>
      </header>
      <div>
        <Tweetname />
        <Timemsg />
      </div>
    </div>
  );
}

export default App;
