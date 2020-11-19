import React from 'react';
import ReactDOM from  'react-dom';

class TodoList extends React.Component {
  render() {
    return [<li>{this.props.parameters.render_A} Get out of bed, {this.props.parameters.render_B} "Wed Sep 13 2017"</li>,
           <li>{this.props.parameters.render_A} Brush teeth, {this.props.parameters.render_B} "Thu Sep 14 2017"</li>,
           <li>{this.props.parameters.render_A} Eat breakfast, {this.props.parameters.render_B} "Fri Sep 15 2017"</li>];
  }
}

class Atributes extends React.Component {
  render() {
    const items = {render_A: "description:", render_B: "deadline date: "} ;
    return (
      <div>
      <h1>Basic React & props TODO LIST</h1>
      <TodoList parameters={items} />
      </div>
    );
  }
}
ReactDOM.render(<Atributes />, document.getElementById('root'));

export default Atributes;