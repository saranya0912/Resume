import React, {Component} from 'react';

class Certificates extends Component{
    render(){
        return(
            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <span className="job-title"><a href={this.props.item.certificateURL}>{this.props.item.course}</a></span>
                        <div className="time">{this.props.item.date}</div>
                    </div>
                </div>
            </div>
        );
    }    

}

export default Certificates;