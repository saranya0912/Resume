import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="item">
        <div className="meta">
          <div className="upper-row">
            <div>
              <h3 className="job-title">
                {this.props.item.name}, {this.props.item.year} - (
                {this.props.item.technology})&nbsp;
                <a href={this.props.item.url} target="_blank">
                  <i className="fas fa-code" />
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="details">
          <p>
            {this.props.item.detail}&nbsp;&nbsp;{" "}
            {this.props.item.appLink ? (
              <a href={this.props.item.appLink} target="_blank">
                <i className="fas fa-globe" /> App Link
              </a>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
