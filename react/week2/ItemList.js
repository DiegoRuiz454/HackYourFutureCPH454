
import React, { Component } from 'react';



class ItemList extends Component {
  render() {
    return ( 
        <div>
         <li>
             {this.props.id} <button onClick={this.props.delete}>Delete</button>
             
            <br/>
            {this.props.description}  
            <br/>
            
          </li>
        </div> 
    )
  }
};

export default ItemList;