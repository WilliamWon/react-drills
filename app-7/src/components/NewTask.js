import React, {Component} from 'react';

class NewTask extends Component{
    constructor(){
        super();
        this.state = {
            input : ''
        }
        this.handleAdd = this.handleAdd.bind(this);              
    }

    handleChange(val){
        this.setState({input:val})
    }    
    handleAdd(){
        this.props.add(this.state.input)
        this.setState({input: ''})
    }
    render(){
        return(
            <div>
                <input
                    value={this.state.input}
                    onChange={(e)=> this.handleChange(e.target.value)}
                    placeholder="Add to Tasks"
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask;