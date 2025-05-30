import React from "react";
import nickPic from "../images/NEdwards-pic.png";

// Do we want to try this to organize the bio, pic, etc.
// import { Card, CardGroup, Row, Col, Container } from "react-bootstrap/";

// icons below from https://react-icons.github.io/react-icons/
import {
  SiPython,
  SiPypi,
  SiPytest,
  SiPostgresql,
  SiApacheairflow,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiSqlite,
  SiMysql,
  SiSequelize,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiHandlebarsdotjs,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJest,
  SiInsomnia,
  SiHeroku,
  SiApollographql,
  // GCP
  SiGooglecloud,
  SiGooglebigquery,
  SiGooglecloudstorage,
  SiGooglecloudcomposer,
  // AWS
  SiAmazonwebservices,
  SiAwslambda,
  SiAmazonec2,
  SiAmazonrds,
  SiAmazonecs,
  SiAmazoneks,
  SiAmazons3,
  SiAmazoniam,
  SiAmazoncognito,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { HiIdentification } from "react-icons/hi2";
import { VscTerminalPowershell } from "react-icons/vsc";
import { FaSquareGit } from "react-icons/fa6";

// import { SiPython, TbSql, SiPostgresql, SiApacheairflow, SiGooglecloud, SiGooglebigquery, SiGooglecloudstorage, HiIdentification, SiHtml5, SiCss3, SiJavascript, SiJquery, SiMysql, SiSequelize, SiGraphql, SiHandlebarsdotjs, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJest, SiInsomnia, SiHeroku, SiApollographql, FaSquareGit } from "react-icons/all-files";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      margin: "auto",
      width: "70%",
      height: 5,
    }}
  />
);

export default function Bio() {
  return (
    <section className="about-container mt-4 col-10">
      <div>
        <p>
          I am a <strong>Software Developer</strong> and{" "}
          <strong>Data Engineer</strong> skilled in Python, SQL, and cloud
          platforms, including Google Cloud (GCP), AWS, and Azure. I specialize
          in designing and optimizing ETL data pipelines, deploying scalable
          applications using cloud resources, and ensuring secure, reliable data
          architecture. My experience includes RESTful API development, CI/CD
          automation, and leveraging error alerting and performance monitoring
          tools. I bring strong problem-solving and communication skills, with a
          passion for sports data science—especially soccer. I thrive on
          creating data-driven solutions that deliver measurable results with a
          tangible impact.
        </p>

        <ColoredLine color="gray" />

        <h4 className="nav-main nav-menu" style={{ fontWeight: "700" }}>
          toolkit
        </h4>
        <div className="tools-container col-10">
          <h1>
            <SiPython title="Python" />
          </h1>
          <h1>
            <TbSql title="SQL" />
          </h1>
          <h1>
            <SiPostgresql title="PostgreSQL" />
          </h1>
          <h1>
            <SiSqlite title="SQLite" />
          </h1>
          <h1>
            <SiDocker title="Docker" />
          </h1>
          <h1>
            <SiKubernetes title="Kubernetes" />
          </h1>
          {/* GCP */}
          <h1>
            <SiGooglecloud title="Google Cloud Platform" />
          </h1>
          <h1>
            <SiGooglebigquery title="BigQuery" />
          </h1>
          <h1>
            <SiGooglecloudstorage title="Google Cloud Storage" />
          </h1>
          <h1>
            <SiGooglecloudcomposer title="Google Cloud Composer" />
          </h1>
          <h1>
            <DiGoogleCloudPlatform title="Google Cloud Run & Cloud Build" />
          </h1>
          <h1>
            <HiIdentification title="IAM - Identity & Access Management" />
          </h1>
          {/* AWS */}
          <h1>
            <SiAmazonwebservices title="AWS" />
          </h1>
          <h1>
            <SiAwslambda title="AWS Lambda Functions" />
          </h1>
          <h1>
            <SiAmazonec2 title="AWS EC2 - Cloud Computing & Virtual Machines" />
          </h1>
          <h1>
            <SiAmazons3 title="AWS S3 - Cloud Storage Buckets" />
          </h1>
          <h1>
            <SiAmazonrds title="AWS Relational Database Service (RDS)" />
          </h1>
          <h1>
            <SiAmazonecs title="AWS Amazon Elastic Container Service (ECS)" />
          </h1>
          <h1>
            <SiAmazoneks title="AWS Elastic Kubernetes Service (EKS)" />
          </h1>
          <h1>
            <SiAmazoniam title="AWS IAM" />
          </h1>
          <h1>
            <SiAmazoncognito title="AWS Cognito" />
          </h1>
          <h1>
            <SiApacheairflow title="Apache Airflow" />
          </h1>
          <h1>
            <SiHtml5 title="HTML" />
          </h1>
          <h1>
            <SiCss3 title="CSS" />
          </h1>
          <h1>
            <SiJavascript title="JS/Javascript" />
          </h1>
          <h1>
            <RiNextjsFill title="Next.js" />
          </h1>
          <h1>
            <SiReact title="React" />
          </h1>
          <h1>
            <SiExpress title="Express" />
          </h1>
          <h1>
            <SiNodedotjs title="Node.js" />
          </h1>
          <h1>
            <SiMongodb title="MongoDB" />
          </h1>
          <h1>
            <SiMysql title="MySQL" />
          </h1>
          <h1>
            <SiGraphql title="GraphQL" />
          </h1>
          <h1>
            <SiPypi title="PyPI - The Python Package Index" />
          </h1>
          <h1>
            <SiPytest title="Pytest" />
          </h1>
          <h1>
            <VscTerminalPowershell title="Bash" />
          </h1>
          <h1>
            <FaSquareGit title="Git" />
          </h1>
          {/* <h1><SiJquery title="jQuery" /></h1> */}
          {/* <h1><SiSequelize title="Sequelize" /></h1> */}
          {/* <h1><SiHandlebarsdotjs title="Handlebars" /></h1> */}
          {/* <h1><SiJest title="Jest" /></h1> */}
          {/* <h1><SiInsomnia title="Insomnia" /></h1> */}
          {/* <h1><SiHeroku title="Heroku" /></h1> */}
          {/* <h1><SiApollographql title="Apollo" /></h1> */}
        </div>
      </div>

      <div className="col-2 portfolio-picture">
        <img
          title="Nick Edwards - Full Stack Dev"
          alt="Nick Edwards - Full Stack Dev"
          src={nickPic}
        />
      </div>
    </section>
  );
}
