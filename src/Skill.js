import React, {Component} from 'react';

class Skills extends Component{
    render(){
        return(
            <div>
               <div className="item">{this.props.item.category}</div>
                <p>{this.props.item.skilledAt}</p>
            </div>
        );
    }
}

export default Skills;