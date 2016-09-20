import React from "react";

class TweetMedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        console.log("mount:" + this.props.id);
        twttr.widgets.createTweet(this.props.id, document.getElementById("tweet_" + this.props.id))
            .then(function (el) {
                console.log("Tweet has been displayed: ", el);
            });
    }
    
    render() {
        return <div id={"tweet_" + this.props.id}></div>
    }
}

export default TweetMedia;