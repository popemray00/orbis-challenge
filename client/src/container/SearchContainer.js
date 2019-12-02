import React, { Component } from 'react';
import './SearchContainer.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'


class SearchConatainer extends Component {
    state = {
        symbol: [],
        messages: [],
    }

    onChange = (event) => {
        this.setState({ symbol: event.target.value });
    }

    handleSubmit = (event) => {
        let url = this.state.symbol
        let result = url.toUpperCase()

        event.preventDefault()

        fetch(`https://api.stocktwits.com/api/2/streams/symbol/`+ url + `.json`)
        .then(res => res.json())
        .then(
            (data) => {
                this.setState({
                    symbol: result,
                    messages: data.messages
                })
            }
        )
    }

    messCount = () => {
        let mess = this.state.messages;
        let count = mess.length;
        return count
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
                        <input type="text" value={this.state.symbol} placeHolder={"AAPL, BABA, JOY"} onChange={this.onChange} /> 
                        <button>Submit</button>       
                    </form>
                </div>

                <div className="Symbol">
                    <p>SYMBOL:</p>
                    ${this.state.symbol}
                </div>

                <div className="Messages">
                    <ul className="Ul"> 
                        {this.state.messages.map(messages =>
                            <CardDeck>
                                <Card key={messages.id} style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Text>
                                        {messages.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </CardDeck>)}
                    </ul>     
                </div>
                        <div>There are {this.messCount()} Messages!</div>
            </div>
        )
    }
}

export default SearchConatainer