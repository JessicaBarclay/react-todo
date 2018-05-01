import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          title: "",
          description: ""
        };
      }

    addTitle = (event) => {
        this.setState({title: event.target.value})
    }

    addDescription  = (event) => {
        this.setState({description: event.target.value})
    }

    /*create local function here to be called on submit, to alter this.state.title and desc*/
    
    onClickHandler = () => {
        let todo = {title: this.state.title,
            description: this.state.description
        }
        this.props.onSubmitHandler(todo)
    }

    render() {
        return (
            <div>
                <input type="text"name="title" onChange={this.addTitle}> 
                </input>
                <input type="text"name="description" onChange={this.addDescription}>
                </input>
                <button onClick={() => this.onClickHandler() }>+</button>
            </div>
        );
    }
}


  export default TodoForm;
