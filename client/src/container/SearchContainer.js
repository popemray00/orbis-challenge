import React, { Component } from 'react';
import './SearchContainer.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';


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
                
                <div>
                    <Jumbotron className="Jumbo" fluid>
                    </Jumbotron>
                </div>

                <div>
                    <h1>Greetings Fellow Investers!</h1>
                    <h3>Please start out by searching a stock symbol!</h3>
                </div>

                <div className="Form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.symbol} placeHolder={"AAPL, BABA, JOY, ETC.."} onChange={this.onChange} /> 
                        <button>Submit</button>       
                    </form>
                </div>

                <div className="Symbol">
                    <p>SYMBOL:</p>
                    ${this.state.symbol}
                </div>

                <div className="Messages">
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
            
                </div>

                        <div>
                            There are {this.messCount()} Messages!
                        </div>

            </div>
        )
    }
}

export default SearchConatainer