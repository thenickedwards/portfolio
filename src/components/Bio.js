import React from 'react';
import nickPic from "../images/NEdwards-pic.png";

// Do we want to try this to organize the bio, pic, etc.
// import { Card, CardGroup, Row, Col, Container } from "react-bootstrap/";

// icons below from https://react-icons.github.io/react-icons/
import { SiPython, SiPostgresql, SiApacheairflow, SiGooglecloud, SiGooglebigquery, SiGooglecloudstorage, SiHtml5, SiCss3, SiJavascript, SiJquery, SiMysql, SiSequelize, SiGraphql, SiHandlebarsdotjs, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJest, SiInsomnia, SiHeroku, SiApollographql } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { MdStorage } from "react-icons/md";
import { BsFillBucketFill } from "react-icons/bs";
import { HiIdentification } from "react-icons/hi2";
import { FaSquareGit } from "react-icons/fa6";

// import { SiPython, TbSql, SiPostgresql, SiApacheairflow, SiGooglecloud, SiGooglebigquery, SiGooglecloudstorage, HiIdentification, SiHtml5, SiCss3, SiJavascript, SiJquery, SiMysql, SiSequelize, SiGraphql, SiHandlebarsdotjs, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJest, SiInsomnia, SiHeroku, SiApollographql, FaSquareGit } from "react-icons/all-files";

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          margin: 'auto',
          width: '70%',
          height: 5
      }}
  />
);

export default function Bio() {
  return (
    <section className='about-container mt-4 col-10'>
        <div>
          <p>I am a Data Engineer with a background in web development. With expertise in building and optimizing ETL pipelines using Python and SQL, I leverage my arts background to devise creative solutions, articulate clear documentation, and foster collaboration within my team. My experience includes ensuring data integrity, enhancing workflow efficiency, and implementing resource performance and error monitoring. Driven by a passion for sports data science, particularly in soccer, I love contributing to innovative projects and creating impactful, data-driven solutions.</p>
          
          <ColoredLine color="gray" />

          <h4 className='nav-main nav-menu' style={{fontWeight: '700'}}>toolkit</h4>
          <div className='tools-container col-10'>
            
            <h1><SiPython alt="Python"/></h1>
            <h1><TbSql alt="SQL"/></h1>
            <h1><SiPostgresql alt="PostgreSQL"/></h1>
            <h1><SiApacheairflow alt="Apache Airflow"/></h1>

            <h1><SiGooglecloud alt="Google Cloud Platform"/></h1>
            <h1><SiGooglebigquery alt="BigQuery"/></h1>
            <h1><MdStorage alt="Google Cloud Storage"/></h1>
            <h1><HiIdentification alt="IAM - Identity & Access Management"/></h1>
            

            <h1><SiHtml5 alt="HTML"/></h1>
            <h1><SiCss3 alt="CSS"/></h1>
            <h1><SiJavascript alt="JS/Javascript"/></h1>

            <h1><SiReact alt="React"/></h1>
            <h1><SiExpress alt="Express"/></h1>
            <h1><SiNodedotjs alt="Node.js"/></h1>
            <h1><SiMongodb alt="MongoDB"/></h1>

            {/* <h1><SiJquery alt="jQuery"/></h1> */}
            <h1><SiMysql alt="MySQL"/></h1>
            {/* <h1><SiSequelize alt="Sequelize"/></h1> */}
            <h1><SiGraphql alt="GraphQL"/></h1>
            {/* <h1><SiHandlebarsdotjs alt="Handlebars"/></h1> */}            
            {/* <h1><SiJest alt="Jest"/></h1> */}
            {/* <h1><SiInsomnia alt="Insomnia"/></h1> */}
            {/* <h1><SiHeroku alt="Heroku"/></h1> */}
            {/* <h1><SiApollographql alt="Apollo"/></h1> */}

            <h1><FaSquareGit alt="Git"/></h1>


          </div>
        </div>

        <div className='col-2 portfolio-picture'>
          <img alt="Nick Edwards - Full Stack Dev" src={nickPic} />
        </div>
    </section>
  )
}
