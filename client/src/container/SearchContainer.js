import React, { Component } from 'react';
import './SearchContainer.css';

class SearchConatainer extends Component {
    state = {
        symbol: [],
        messages: []
    }

    onChange = (event) => this.setState({ symbol: event.target.value });

    handleSubmit = (event) => {
        let url = this.state.symbol
        console.log(this.state.symbol);
        
        event.preventDefault()
        fetch(`https://api.stocktwits.com/api/2/streams/symbol/`+ url + `.json`)
        .then(res => res.json())
        .then(
            (data) => {
                this.setState({
                    messages: data.messages
            })
            }
        )
      }

    render() {
        return (
            <div className="Main">
                <div className="Header">
                    <h1>Greetings Fellow Investers</h1>
                    <p>Please start out by searching a stock symbol</p>
                </div>
                <div className="Form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.symbol} onChange={this.onChange} /> 
                        <button>Submit</button>       
                    </form>
                </div>

                <div className="Symbol">
                    {this.state.symbol}
                </div>

                <div className="Messages">   
                    <ul>
                        {this.state.messages.map(messages =>
                            <p key={messages.id}>{messages.body}</p>)}
                    </ul>
                </div>

            </div>
        )
    }
}

export default SearchConatainer