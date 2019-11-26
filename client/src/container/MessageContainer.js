import React, { Component } from 'react';
import StockForm from "../components/StockForm";
import FetchStocks from "../components/FetchStocks"



class MessagesContainer extends Component {

    state = {
        messages: []
    }
    

    render() {
        return (
            <div>
                <StockForm fetchMessages={this.fetchMessages} />
                <FetchStocks messages={this.state.messages} />
            </div>
        )
    }

    fetchMessages = (symbol = " ") => {
        fetch(`https://api.stocktwits.com/api/2/streams/symbol/AAPL.json`)
        .then(res => res.json())
        .then(({data}) => {
            console.log(data);
            //this.setState({ messages: data.map( messages = messages.body ) });
            //console.log(messages);
          
    })
}

componentDidMount() {
    this.fetchMessages()
  }
}

export default MessagesContainer;