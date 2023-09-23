// App.jsx
import React from 'react';
import Career from './assets/components/career.jsx';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <img src="./careers-thumbnail2.png" alt="Careers" />
        <div className="career-container">
          <div className="career-card">
            <Career title="Software Engineer" description="A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of computer software." link="https://en.wikipedia.org/wiki/Software_engineer"/>
          </div>
          <div className="career-card">
            <Career title="Data Scientist" description="A data scientist is an expert in statistics, data science, Big Data, R programming, Python, and SAS, and a career as a data scientist promises plenty of opportunity and high-paying salaries." link="https://en.wikipedia.org/wiki/Data_science"/>
          </div>
          <div className="career-card">
            <Career title="Web Developer" description="A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model." link="https://en.wikipedia.org/wiki/Web_development"/>
          </div>
          <div className="career-card">
            <Career title="Product Manager" description="A product manager is a professional role that is responsible for the development of products for an organization, known as the practice of product management." link="https://en.wikipedia.org/wiki/Product_management"/>
          </div>
          <div className="career-card">
            <Career title="UX Designer" description="A UX designer is a professional who designs user interfaces for websites, applications, and other digital products." link="https://en.wikipedia.org/wiki/User_experience_design"/>
          </div>
          <div className="career-card">
            <Career title="Mobile Developer" description="A mobile developer is a programmer who specializes in the development of mobile applications for iOS and Android devices." link="https://en.wikipedia.org/wiki/Mobile_app_development"/>
          </div>
          <div className="career-card">
            <Career title="Cloud Architect" description="A cloud architect is a professional who designs and manages cloud computing systems for organizations." link="https://en.wikipedia.org/wiki/Cloud_computing"/>
          </div>
          <div className="career-card">
            <Career title="Cybersecurity Analyst" description="A cybersecurity analyst is a professional who protects computer systems and networks from cyber attacks." link="https://en.wikipedia.org/wiki/Cybersecurity"/>
          </div>
          <div className="career-card">
            <Career title="Artificial Intelligence Engineer" description="An artificial intelligence engineer is a professional who designs and develops artificial intelligence systems and applications." link="https://en.wikipedia.org/wiki/Artificial_intelligence"/>
          </div>
          <div className="career-card">
            <Career title="Blockchain Developer" description="A blockchain developer is a programmer who specializes in the development of blockchain-based applications and systems." link="https://en.wikipedia.org/wiki/Blockchain"/>
          </div>
          <div className="career-card">
            <Career title="DevOps Engineer" description="A DevOps engineer is a professional who combines software development and IT operations to improve the efficiency and reliability of software delivery." link="https://en.wikipedia.org/wiki/DevOps"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;