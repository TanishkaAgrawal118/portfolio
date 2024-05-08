import { FaBootstrap, FaHtml5, FaJs, FaReact,FaJava } from "react-icons/fa"
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
// import {tours} from "../Images/tours.png";
import tours from "../Images/tours.png";
import todo from "../Images/todo.png";
import portfolio from "../Images/portfolio.png";
export const bio =[
    {
        name:'Agrawal',
        roles:['Full Stack Developer','Problem Solver','Java Programmer']
    }
]
export const skills = [
    {
        icon:<FaHtml5 className="icon"/>,
        title:'HTML'
    },
    {
        icon:<FaCss3Alt className="icon"/>,
        title:'CSS'
    },
    {
        icon:<FaJs className="icon"/>,
        title:'Javascript'
    },
    {
        icon:<FaBootstrap className="icon"/>,
        title:'Bootstrap'
    },
    {
        icon:<FaReact className="icon"/>,
        title:'React'
    },
    {
        icon:<DiNodejs className="icon" />,
        title:'NodeJS'
    },
    {
        icon:<SiMongodb className="icon" />,
        title:'MongoDB'
    },
    {
        icon:<SiMysql className="icon" />,
        title:'Mysql'
    },
    {
        icon:<FaJava className="icon"/>,
        title:'Java'
    },
    {
        icon:<IoLogoGithub className="icon"/>,
        title:'Github'
    }
]

export const projects = [
    {
      title: "To Do List",
      image: todo,
      description: "Web Application for managing task that allow user to enter their task and view all the tasks as pending or completed",
      link: "#",
    },
    {
      title: "Tours and Travel",
      image: tours,
      description: "This website will give information about tours of different places with their cost and more..",
      link: "#",
    },
    {
      title: "Portfolio",
      image: portfolio,
      description: "Dynamic portfolio showcasing my passion, skills, and accomplishments creatively.",
      link: "#",
    },
];
