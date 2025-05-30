import * as React from "react";
import { Card } from "react-bootstrap/";

// Sample app images
import picDuelsMapping from "../images/app-duels-mapping-uxui-design.jpg";
import picMyTeamStats from "../images/app-myteam_addSeason.jpg";
import picNimbusDevops from "../images/app-aws-lambda.jpg";
import picByteOfPy from "../images/app-byte-of-py.jpg";
import picByteOfPy2 from "../images/app-byte-of-py2-pgagmin.jpg";
import picGameNotes from "../images/app-gamenotes.jpg";
// import picReadMeGenerator from "../images/app-good-readme-generator.gif";
// import picComingSoon from "../images/app-comingsoon.jpg";

// Icons for technologies
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiPypi,
  SiPandas,
  SiNumpy,
  SiJquery,
  SiPostgresql,
  SiSqlite,
  SiSqlalchemy,
  SiMysql,
  SiSequelize,
  SiGraphql,
  SiHandlebarsdotjs,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiDotenv,
  SiJest,
  SiInsomnia,
  SiHeroku,
  SiApollographql,
  SiMui,
  SiSelenium,
  SiCheerio,
  SiVercel,
  // AWS
  SiAmazonwebservices,
  SiAwslambda,
  SiAmazonec2,
  SiAmazonrds,
  SiAmazonecs,
  SiAmazoneks,
  SiAmazons3,
  SiAmazoniam,
  // GCP
  SiGooglecloud,
  SiGooglebigquery,
  SiGooglecloudstorage,
  SiGooglecloudcomposer,
  SiGooglecolab,
} from "react-icons/si";
// import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { BsFiletypeJson } from "react-icons/bs";
import { MdSoupKitchen } from "react-icons/md";
import { VscAzure } from "react-icons/vsc";

const workSamples = [
  {
    id: 1,
    title: "duels_mapping",
    imagePath: picDuelsMapping,
    description:
      "An interactive data visualization dashboard which supports a new composite sports statistic: Contested Possession Metric -- a method for rating a player's ability to win and/or keep possession (AKA the Schmetzer Score).",
    technologies: [
      <SiPython />,
      <SiJavascript />,
      <SiSqlite />,
      <RiNextjsFill />,
      <TbApi />,
      <SiNodedotjs />,
      <MdSoupKitchen />,
      <SiSelenium />,
      <SiCheerio />,
      <SiHtml5 />,
      <SiCss3 />,
      <SiMui />,
      <SiReact />,
      <SiVercel />,
    ],
    page: "LIVE",
    pageURL: "Deployment to Vercel pending",
    repo: "REPO",
    repoURL: "https://github.com/thenickedwards/duels_mapping",
  },
  {
    id: 2,
    title: "myTeam Stats",
    imagePath: picMyTeamStats,
    description:
      "A soccer roster and stats tracker for youth leagues, adult recreational teams, and school sports! The myTeam Stats app is the best way to manage anything from players on a team to multiple leagues running multiple seasons.",
    technologies: [
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
      <SiMui />,
      <SiMongodb />,
      <SiExpress />,
      <SiReact />,
      <SiNodedotjs />,
      <SiGraphql />,
      <SiApollographql />,
      <SiHeroku />,
    ],
    page: "LIVE",
    pageURL: "https://myteam-stats.herokuapp.com/",
    repo: "REPO",
    repoURL: "https://github.com/thenickedwards/My-Team-Stats-Tracker",
  },
  {
    id: 3,
    title: "nimbus_devops",
    imagePath: picNimbusDevops,
    description:
      "nimbus_devops is the third and final repo in the byte_of_py trilogy, focused on mastering modern cloud-based software engineering, writing Python-powered data pipelines, practicing CI/CD and Agile principles, and integrating cloud services using Google Cloud Platform (GCP), Amazon Web Services (AWS), and MS Azure), plus a little side of Docker containerization.",
    technologies: [
      <SiPython />,
      <SiPostgresql />,
      <SiDocker />,
      <SiKubernetes />,
      // AWS
      <SiAmazonwebservices />,
      <SiAwslambda />,
      <SiAmazonec2 />,
      <SiAmazonrds />,
      <SiAmazonecs />,
      <SiAmazoneks />,
      <SiAmazons3 />,
      <SiAmazoniam />,
      // GCP
      <SiGooglecloud />,
      <SiGooglecloudstorage />,
      <SiGooglecloudcomposer />,
      <DiGoogleCloudPlatform />,
      // Azure
      <VscAzure />,
    ],
    page: "TOC",
    pageURL:
      "https://github.com/thenickedwards/nimbus_devops/tree/main?tab=readme-ov-file#nimbus_devops",
    repo: "REPO",
    repoURL: "https://github.com/thenickedwards/nimbus_devops",
  },
  {
    id: 4,
    title: "byte_of_py2_the_sql",
    imagePath: picByteOfPy2,
    description:
      "A second helping of Python, perfect for querying and managing databases, served SQL à la mode with dollop of data insights on top. Featuring database management, data modeling, and object-relational mapping (ORM).",
    technologies: [
      <SiPython />,
      <TbSql />,
      <SiPostgresql />,
      <SiDocker />,
      <SiSqlalchemy />,
      <SiNumpy />,
      <SiGooglecolab />,
    ],
    page: "TOC",
    pageURL:
      "https://github.com/thenickedwards/byte_of_py2_the_sql?tab=readme-ov-file#byte_of_py2_the_sql",
    repo: "REPO",
    repoURL: "https://github.com/thenickedwards/byte_of_py2_the_sql",
  },
  {
    id: 5,
    title: "byte_of_py",
    imagePath: picByteOfPy,
    description:
      "A Pythonic playground for practicing purposeful programming, polishing problem-solving, and pushing personal progress. Featuring Python algorithms, object-oriented programming (OOP), and data structures.",
    technologies: [
      <SiPython />,
      <SiPypi />,
      <SiPandas />,
      <BsFiletypeJson />,
      <SiDotenv />,
    ],
    page: "TOC",
    pageURL:
      "https://github.com/thenickedwards/byte_of_py?tab=readme-ov-file#byte_of_py",
    repo: "REPO",
    repoURL: "https://github.com/thenickedwards/byte_of_py",
  },
  {
    id: 6,
    title: "Game Notes",
    imagePath: picGameNotes,
    description:
      "A platform for coaches, staff, medical personnel, data analysts, and players to collect thoughts, observations, questions, etc. on recent soccer games. Teams can coordinate and collaborate on Game Notes.",
    technologies: [
      <SiHtml5 />,
      <SiHandlebarsdotjs />,
      <SiCss3 />,
      <SiJavascript />,
      <SiSequelize />,
      <SiInsomnia />,
      <SiExpress />,
      <SiNodedotjs />,
    ],
    page: "LIVE",
    pageURL: "https://gamenotes-thenickedwards.herokuapp.com",
    repo: "REPO",
    repoURL: "https://github.com/thenickedwards/game-notes",
  },
  // {
  //   id: 7,
  //   title: "good-readme-generator",
  //   imagePath: picReadMeGenerator,
  //   description:
  //     "A command-line application that accepts user input and generates a high-quality, professional README.md. From clickable table of contentns to license badges! Technologies used: JS, Inquirer, fs/file system",
  //   technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
  //   page: "DEMO",
  //   pageURL:
  //     "https://drive.google.com/file/d/1jIMywy9jxhm8zK6Pv2GPztcIyaX4DLUx/view",
  //   repo: "REPO",
  //   repoURL: "https://github.com/thenickedwards/good-readme-generator",
  // },
];

export default function Projects() {
  return (
    <section className="container d-flex justify-content-center">
      {/* <section className="samples-container vw-100"> */}

      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        {workSamples.map((item) => (
          <Card
            key={item.id}
            // style={{ width: "18rem" }}
            className="p-3"
            // className="row col-md-3 m-4 sample-card"
          >
            <Card.Img
              variant="top"
              src={item.imagePath}
              style={{ height: "10rem" }}
            />
            <Card.Body>
              <Card.Title>
                <strong>{item.title}</strong>{" "}
              </Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text className="tech-icons">{item.technologies}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href={item.pageURL}>{item.page}</Card.Link>
              <Card.Link href={item.repoURL}>{item.repo}</Card.Link>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
}
