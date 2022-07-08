class Tweet {
    constructor(sender, content, link='no link provided', likes=0, retweets=0, replies=[], replyCount=0,){
        this.sender = sender;
        this.content = content;
        this.retweets = retweets;
        this.link = link;
        this.replies = replies;
        this.replyCount = replyCount;
        this.likes = likes;
        
      
    }

    like(){
        return this.likes+=1;
    }

    retweet(){
        return this.retweets+=1;
    }

    reply(stuff){
        this.replyCount+=1;
        return this.replies.push(stuff);
        
    }
}

module.exports = Tweet;
