import React, { Component } from 'react';
import Wrapper from './components/wrapper';
import Avatar from './components/avatar';
import Text from './components/text';

class App extends Component {
    state = {
        score: null,
        clicked: false,
        loading: true
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ loading:false });
        }, 1000);
    }

    click = () => {
        this.setState({
            clicked: true,
            score: `The Sass is ${parseInt(Math.random() * 100, 10)}`
        })
        setTimeout(() => {
            this.setState({
                clicked: false
            })
        }, 1000);
    }

    render() {
        return(
            <Wrapper>
                <Text>The Sassometer</Text>
                <Avatar 
                    size={'400px'}
                    image={'https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg'}
                    color={'white'}
                    clicked = {this.state.clicked}
                    onClick = {this.click}
                    loading = {this.state.loading}
                />
                <Text>{this.state.score}</Text>
            </Wrapper>
        )
    }
}

export default App;