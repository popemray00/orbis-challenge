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

    fetchMessages = (messages = "") => {
        fetch(`https://api.stocktwits.com/api/2/streams/symbol/:id.json`)
        .then(res => res.json())
        .then(({data}) => {
            console.log(data);
            //this.setState({ messages: data.map( message => ({ message: body }) ) });
            //console.log(messages);
          
    })
}

componentDidMount() {
    this.fetchMessages()
  }
}

export default MessagesContainer;