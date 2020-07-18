import React, {Component} from 'react';

class Educations extends Component{
    render(){
        return(
            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">{this.props.item.university}, {this.props.item.place}</h3>
                        <div className="time">{this.props.item.GPA}/{this.props.item.totalGPA}</div>
                    </div>
                    <div className="company">{this.props.item.degree}, {this.props.item.period}</div>
                </div>
            </div>
        );
    }    

}

export default Educations;