import { useState } from 'react'
import './App.css'
import Career from './assets/components/career.jsx'

function App() {
  const [count, setCount] = useState(0)

  const careers = [
    {
      title: "Software Engineer",
      description: "A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of computer software.",
      link: "https://en.wikipedia.org/wiki/Software_engineer"
    },
    {
      title: "Data Scientist",
      description: "A data scientist is an expert in statistics, data science, Big Data, R programming, Python, and SAS, and a career as a data scientist promises plenty of opportunity and high-paying salaries.",
      link: "https://en.wikipedia.org/wiki/Data_science"
    },
    {
      title: "Web Developer",
      description: "A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model.",
      link: "https://en.wikipedia.org/wiki/Web_development"
    },
    {
      title: "Product Manager",
      description: "A product manager is a professional role that is responsible for the development of products for an organization, known as the practice of product management.",
      link: "https://en.wikipedia.org/wiki/Product_management"
    },
    {
      title: "UX Designer",
      description: "A UX designer is a professional who designs user interfaces for websites, applications, and other digital products.",
      link: "https://en.wikipedia.org/wiki/User_experience_design"
    },
    {
      title: "Mobile Developer",
      description: "A mobile developer is a programmer who specializes in the development of mobile applications for iOS and Android devices.",
      link: "https://en.wikipedia.org/wiki/Mobile_app_development"
    },
    {
      title: "Cloud Architect",
      description: "A cloud architect is a professional who designs and manages cloud computing systems for organizations.",
      link: "https://en.wikipedia.org/wiki/Cloud_computing"
    },
    {
      title: "Cybersecurity Analyst",
      description: "A cybersecurity analyst is a professional who protects computer systems and networks from cyber attacks.",
      link: "https://en.wikipedia.org/wiki/Cybersecurity"
    },
    {
      title: "Artificial Intelligence Engineer",
      description: "An artificial intelligence engineer is a professional who designs and develops artificial intelligence systems and applications.",
      link: "https://en.wikipedia.org/wiki/Artificial_intelligence"
    },
    {
      title: "Blockchain Developer",
      description: "A blockchain developer is a programmer who specializes in the development of blockchain-based applications and systems.",
      link: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
      title: "DevOps Engineer",
      description: "A DevOps engineer is a professional who combines software development and IT operations to improve the efficiency and reliability of software delivery.",
      link: "https://en.wikipedia.org/wiki/DevOps"
    }
  ];

  return (
    <>
      <div>
        {careers.map((career, index) => (
          <div key={index}>
            <Career title={career.title} description={career.description} />
            <a href={career.link} target="_blank" rel="noopener noreferrer">Learn more about {career.title}</a>
          </div>
        ))}
      </div>
    </>
  )
}

export default App