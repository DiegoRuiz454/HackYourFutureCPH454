import DatePicker from 'react-datepicker' 
import 'react-datepicker/dist/react-datepicker.css'
import React, { Component } from 'react';

class Datepicker extends Component {
    
        state = {
            date : new Date ("2018", "01", "11")
        }

        onChange=date=>{
            this.setState({date:date});
        }

        render() {
        return (
            <div className="container">
                <div className="center">
                    <DatePicker selected={this.state.date} onChange={this.onChange}/> 
                </div>
                
            </div>
        );
    }
}

export default Datepicker;