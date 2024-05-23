import './App.css';
import React,{useState} from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Info from './Info';
import Skills from './Skills';
import pdfProjImage from './static/Textreader.png';
import surveillanceProjImage from './static/SurveillanceDetection.png';

function App() {
  const expContent=
  [
    {
      name:"Graduate Engineering Trainee at Reliance Jio Platforms",
      desc:["During my time at Reliance Jio Platforms, I played a key role in improving the efficiency and functionality of various projects. I streamlined processes, leading to a 10% faster completion rate by enhancing the login system and user interface for a web application. I also tackled and resolved numerous critical issues, ensuring smooth operations, maintained documentation and oversaw testing."],
      date: 'August 2021 - June 2022'
    },
    {
      name:"Software Engineering Intern at Denkali, Inc",
      desc:["As a software engineering intern, I made significant contributions to an ecommerce platform, enhancing its layout and developing over 15 React.js components for product catalogs and 3D product renders. I improved website load times by implementing pagination, lazy loading, and optimizing backend processes"],
      date:'December 2019 - January 2020'
    }
  ]

  const eduContent=
  [
    {name:"University of Florida",
    desc:[" Master of Science in Computer Science"],
    date:'August 2022 - May 2024',
    GPA:"3.92/4.0"
  },
  {
    name:"University of Mumbai",
    desc:["Bachelor of Engineering in Computer Engineering"],
    date: 'August 2017 - June 2021',
    GPA:"9.32/10"
  }
  ]

  const projContent=
  [
    {
      name:"Gesture Based PDF-Reader",
      img:pdfProjImage,
      desc:["- Aid users with motor impairments and dexterity issues to read books and pdfs using gesture and gaze tracking increasing ease of use by 66%.",
            "- Enhanced the user experience by applying web accessibility standards improving the interface with repeated prototyping and user surveys.",
            "- Developed and implemented models using MediaPipe to accurately detect pinches, scrolls, and gaze navigation reduced user interaction errors by 40%.",
            "- Created a PDF reader Interface using HTML, CSS and ReactJS which could be used hands free with 85% accuracy."]
    },
    {
      name:"Automated surveillance using Multiple Instance Learning",
      img:surveillanceProjImage,
      desc:["- An automated surveillance system to detect over 15 types of crimes at a true positive rate of 85%.",
            "- Employed C3D feature extraction to preserve temporal and spatial context and applied loosely supervised multiple instance learning.",
            "- Implemented a highly efficient, lightweight architecture for live surveillance, detecting suspicious activity in real-time reducing false positives by 15%."]
    },
    {
      name:"Performance Trend Evaluation in Soccer",
      desc:["- Web application which analyzed performances of european soccer clubs and players using various metrics overtime and discern trends.",
            "- Parsed over the statistics of more than 1000000 games from 2003 to 2022, creating complex Oracle SQL scripts to fetch and visualize data pertaining to performances, trends and financials of Football clubs.",
            "- Provided concise and relevant insights into team structure, player performance and visualizations overindiscernible data."]
    }
  ]

  const [isOpen,setIsOpen]=useState(false);

  const handleToggle=()=>{
    setIsOpen(!isOpen)
  }


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Navbar isOpen={isOpen} onToggle={handleToggle}/>
        <div className={`main-mg ${isOpen? 'open':''}`}>
          <Hero/>
          <Skills title={"Skills"} compid={'skills'}/>
          <Info compid={'experience'} title={"Experience"} infoContent={expContent}/>
          <Info compid={'education'} title={"Education"} infoContent={eduContent}/>
          <Info compid={'projects'} title={"Academic Projects"} infoContent={projContent}/>
          <Info compid={'contact'} title={"Contact"}/>
        </div>
      </main>
    </div>
  );
}

export default App;
