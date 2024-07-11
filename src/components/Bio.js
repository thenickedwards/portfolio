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
          <p>As a Data Engineer and Backend Software Developer with a foundation in web development, I specialize in building and optimizing ETL pipelines using Python and SQL. My background in the arts equips me with a creative approach to problem-solving, clear communication skills, and a knack for fostering collaboration. I am passionate about sports data science, particularly soccer, and thrive on creating innovative, data-driven solutions that make a tangible impact.</p>
          
          <ColoredLine color="gray" />

          <h4 className='nav-main nav-menu' style={{fontWeight: '700'}}>toolkit</h4>
          <div className='tools-container col-10'>
            
            <h1><SiPython title="Python"/></h1>
            <h1><TbSql title="SQL"/></h1>
            <h1><SiPostgresql title="PostgreSQL"/></h1>
            <h1><SiApacheairflow title="Apache Airflow"/></h1>

            <h1><SiGooglecloud title="Google Cloud Platform"/></h1>
            <h1><SiGooglebigquery title="BigQuery"/></h1>
            <h1><MdStorage title="Google Cloud Storage"/></h1>
            <h1><HiIdentification title="IAM - Identity & Access Management"/></h1>
            

            <h1><SiHtml5 title="HTML"/></h1>
            <h1><SiCss3 title="CSS"/></h1>
            <h1><SiJavascript title="JS/Javascript"/></h1>

            <h1><SiReact title="React"/></h1>
            <h1><SiExpress title="Express"/></h1>
            <h1><SiNodedotjs title="Node.js"/></h1>
            <h1><SiMongodb title="MongoDB"/></h1>

            {/* <h1><SiJquery title="jQuery"/></h1> */}
            <h1><SiMysql title="MySQL"/></h1>
            {/* <h1><SiSequelize title="Sequelize"/></h1> */}
            <h1><SiGraphql title="GraphQL"/></h1>
            {/* <h1><SiHandlebarsdotjs title="Handlebars"/></h1> */}            
            {/* <h1><SiJest title="Jest"/></h1> */}
            {/* <h1><SiInsomnia title="Insomnia"/></h1> */}
            {/* <h1><SiHeroku title="Heroku"/></h1> */}
            {/* <h1><SiApollographql title="Apollo"/></h1> */}

            <h1><FaSquareGit title="Git"/></h1>


          </div>
        </div>

        <div className='col-2 portfolio-picture'>
          <img title="Nick Edwards - Full Stack Dev" alt="Nick Edwards - Full Stack Dev" src={nickPic} />
        </div>
    </section>
  )
}
