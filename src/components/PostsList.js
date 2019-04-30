import React from 'react';
import PostItem from './PostItem';
import "./PostsList.css";

class PostsList extends React.Component {
    constructor() {
        super();
        this.state = { posts: [] };
    }

    componentWillMount() {
        this.fetchLatestNews();
    }

    fetchLatestNews() {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => response.json())
            .then((data) => {
                data.slice(0, 20).map((newsId) => {
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)
                        .then(response => response.json())
                        .then((itemDetail) => {
                            this.setState((currentState) => {
                                currentState.posts.push(itemDetail);
                                return { posts: currentState.posts };
                            })
                        })
                });
            })
    }

    render() {
        return <ol className="ui ordered list posts">
            {this.state.posts.map(function (post) {
                return <PostItem key={post.id} post={post}/>
            })}
        </ol>;
    }
}

export default PostsList;