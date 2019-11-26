import React, { Component } from 'react';
import StockForm from "./components/StockForm";
import MessagesContainer from "./container/MessageContainer";


class App extends Component {

  render() {
    return (
      <div>

        <StockForm />
        <MessagesContainer />
      </div>
    )
  }
}

export default App