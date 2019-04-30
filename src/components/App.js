import React from 'react';
import PostsList from './PostsList';
import Header from './Header';

class App extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container content">
                <PostsList />
            </div>
        </div>;
    }
}

export default App;