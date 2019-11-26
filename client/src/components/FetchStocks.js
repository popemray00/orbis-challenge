import React from 'react'

const FetchStocks = props => {
  console.log(props);
  return (
    <div>
        {props.messages.map(messages => messages.body)}
    </div>
  )
}

export default FetchStocks