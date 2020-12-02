import React, { Component } from 'react';
import ItemList from './ItemList';

class Todo extends Component {
    constructor (){
        super();
        this.postID = 0;
       
        this.state = {
            todos : [],
            Body : "",
            id : ""
         }
    }
    deleteEvent = (index) => {
        const copyPostTodo = Object.assign([], this.state.todos);
        copyPostTodo.splice(index, 1);
        this.setState({
            todos : copyPostTodo
        }

        )
    }
   
    addPost = ()=>{
        
        this.postID = this.postID + 1 ;
        
        const copyPostTodo = Object.assign([], this.state.todos);
        copyPostTodo.push({
            id : this.postID,
            body : this.state.Body
            
        })
        this.setState({
            todos : copyPostTodo
        })
    }

    setPost = (element)=>{
        this.setState({
            Body:element.target.value
        })
    }
    render() {
        return (
            <div>
                <input type = "text" onBlur= {this.setPost}/>
                <button onClick={this.addPost}>Add todo</button> 
                <ul>
                    {
                        this.state.todos.map((post, index)=> {
                            return (
                                <ItemList
                                   key = {post.id}
                                   id = {post.id}
                                   description = {post.description}
                                   delete = {this.deleteEvent.bind(this, index)}
                                   
                                />
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Todo;