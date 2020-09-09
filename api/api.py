import time
from flask import Flask
import tweepy
import asyncio
from flask import jsonify

app = Flask(__name__)

consumer_key = 'rMFxOm5jau48XzAHl0Z6yBVc2'
consumer_secret = 'uvhGy8ramCZ79bP9i0huOIvADtLcAiYJAOzcOU3Gehzd4uwHmZ'
access_token = '1276372249474293761-56b6xSZF8SFJeYli9gOstXxBGAgc26'
access_token_secret ='cqe6OxGtro14ejTLGZujRn6w70nULTrztfmMTZ2LGWmng'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

try:
    api.verify_credentials()
    print("Authentication OK")
except:
    print("Error during authentication")

#
#
#
#



@app.route('/time')
def get_current_time():

    fDate = time.localtime()
    time_string = time.strftime("%m/%d/%Y", fDate)
    print(time_string)
    return {'time': time_string }


@app.route('/')
def hello_world():
    return 'Hello to the World of Flask!'

@app.route('/gettweets')
def getTwitterDetails():
    public_tweets = api.user_timeline("realDonaldTrump")
    response = []
    for tweet in public_tweets:
        response.append(tweet.text)
    return {'tweets': response}
    


""" user = api.get_user("MikezGarcia")

print("User details:")
print(user.name)
print(user.description)
print(user.location)

print("Last 20 Followers:")
for follower in user.followers():
    print(follower.name)
 """


    

