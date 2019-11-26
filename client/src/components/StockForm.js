import React, { Component } from 'react';


class StockForm extends Component {
    state = {
        symbol: ""
      }
    
      handleSubmit = event => {
        event.preventDefault()
        this.props.fetchMessages(this.state.symbol)
      }
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.symbol} onChange={event => this.setState({symbol: event.target.value})} />
            </form>
          </div>
        )
      }
    
    }
export default StockForm;