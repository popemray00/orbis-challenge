import React, { Component } from 'react';

class MessagesContainer extends Component {
    state = {
        symbol: "",
        messages: []
    }
    
    
    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            symbol: event.target.value
        })
      }

    componentDidMount() {
       console.log(this.state);
       
        fetch(`https://api.stocktwits.com/api/2/streams/symbol/aapl.json`)
        .then(res => res.json())
        .then((data => {
            console.log(data);
            let symbol = data.symbol.symbol;
    
            this.setState({symbol: symbol});
            console.log("state", this.state.symbol);

              
            this.setState({messages: data.messages});
            
            
            })
        )
    }
    

    render() {
        
        return (
            <div>
                <div>
                    <form>
                        <input type="text" value={this.state.symbol} onChange={event => this.setState({symbol: event.target.value})} />
                        <button onSubmit={this.handleSubmit}>Submit</button>
                    </form>
                </div>
                <div>
                    {this.state.symbol}
                        <ul>
                            {this.state.messages.map(messages =>
                                <li key={messages.id}>{messages.body}</li>
                            )}
                        </ul>
                </div> 
            </div>
           
        )
    }
}
export default MessagesContainer;