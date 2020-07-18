import React, { Component } from "react";
import resume from "./resume.json";
import "./App.css";
import Experience from "./Experience";
import Projects from "./Projects";
import Educations from "./Education";
import Certificates from "./Certificate";
import Skills from "./Skill";

class App extends Component {
  renderExperience() {
    let resultArrayExp = [];
    resume.experiences.map((item, i) => {
      resultArrayExp.push(<Experience item={item} key={i} />);
    });
    return resultArrayExp;
  }

  renderProjects() {
    let resultArrayPro = [];
    resume.projects.map((item, i) => {
      resultArrayPro.push(<Projects item={item} key={i} />);
    });
    return resultArrayPro;
  }

  renderEducation() {
    let resultArrayPro = [];
    resume.education.map((item, i) => {
      resultArrayPro.push(<Educations item={item} key={i} />);
    });
    return resultArrayPro;
  }

  renderCertificates() {
    let resultArrayPro = [];
    resume.certificate.map((item, i) => {
      resultArrayPro.push(<Certificates item={item} key={i} />);
    });
    return resultArrayPro;
  }

  renderSkill() {
    let resultArrayPro = [];
    resume.skills.map((item, i) => {
      resultArrayPro.push(<Skills item={item} key={i} />);
    });
    return resultArrayPro;
  }

  renderExtraCurricular() {
    let resultArrayPro = [];
    resume.extracurricular.map((item, i) => {
      resultArrayPro.push(
        <li style={{ listStyleType: "square" }} key={i}>
          {item}
        </li>
      );
    });
    return resultArrayPro;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <div className="profile-container">
            <img className="profile" src={resume.image} alt="" />
            <h1 className="name">{resume.name}</h1>
            <h3 className="tagline">{resume.designation}</h3>
            <h3 className="tagline">{resume.major}</h3>
          </div>

          <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
              <li className="address">
                <i className="fas fa-address-card" />
                {resume.address}
              </li>
              <li className="email">
                <i className="fas fa-envelope" />
                <a href="mailto: lavanya.saravanan-1@ou.edu">{resume.email}</a>
              </li>
              <li className="phone">
                <i className="fas fa-phone" />
                <a href="tel:+1 (405)-801-7820">{resume.phone}</a>
              </li>
              <li className="linkedin">
                <i className="fab fa-linkedin-in" />
                <a href={resume.linkedInURL} target="_blank">
                  {resume.linkedIn}
                </a>
              </li>
              <li className="github">
                <i className="fab fa-github" />
                <a href={resume.githubURL} target="_blank">
                  {resume.github}
                </a>
              </li>
            </ul>
          </div>

          <div className="interests-container container-block">
            <h2 className="container-block-title">
              <span className="icon-holder">
                <i className="fas fa-award" />
              </span>
              Skills
            </h2>
            <div className="skillset">{this.renderSkill()}</div>
          </div>

          <div className="interests-container container-block-list">
            <h2 className="container-block-title-list">
              <span className="icon-holder">
                <i className="fas fa-medal" />
              </span>
              Awards
            </h2>
            <div className="extracurricular">
              <ul>{this.renderExtraCurricular()}</ul>
            </div>
          </div>
        </div>

        <div className="main-wrapper">
          <section className="section education-section">
            <h2 className="section-title">
              <span className="icon-holder">
                <i className="fas fa-book" />
              </span>
              Education
            </h2>
            <hr />
            {this.renderEducation()}
          </section>

          <section className="section experiences-section">
            <h2 className="section-title">
              <span className="icon-holder">
                <i className="fas fa-briefcase" />
              </span>
              Experiences
            </h2>
            <hr />
            {this.renderExperience()}
          </section>

          <section className="section projects-section">
            <h2 className="section-title">
              <span className="icon-holder">
                <i className="fas fa-archive" />
              </span>
              Projects
            </h2>
            <hr />
            {this.renderProjects()}
          </section>

          <section className="section education-section">
            <h2 className="section-title">
              <span className="icon-holder">
                <i className="fas fa-certificate" />
              </span>
              Certificates
            </h2>
            <hr />
            {this.renderCertificates()}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
