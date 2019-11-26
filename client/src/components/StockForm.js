import React, { Component } from 'react';


class StockForm extends Component {
    state = {
        messages: ""
      }
    
      handleSubmit = event => {
        event.preventDefault()
        this.props.fetchMessages(this.state.messages)
      }
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.messages} onChange={event => this.setState({messages: event.target.value})} />
            </form>
          </div>
        )
      }
    
    }
export default StockForm;