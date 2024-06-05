
// social icons 

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

// tool icons
import { SiVisualstudiocode } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaRust } from "react-icons/fa6";
import { SiZorin } from "react-icons/si";

import { SiLunacy } from "react-icons/si";

import zach from './../public/image.png';
import Image from 'next/image';
import styles from "./page.module.css";
import Tool from './components/tool';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.start}>
        <div className={styles.intro}>
          <h1>ZACH DAVID</h1>
          <div className={styles.socials}>
            <a href="https://github.com/zenzore"><FaSquareGithub className={styles.social_icons}/></a>
            <a href="https://facebook.com/zenzxay.bruh"><FaFacebookSquare className={styles.social_icons}/></a>
            <a href="https://instagram.com/zenzxay"><FaSquareInstagram className={styles.social_icons}/></a>
            <a href="#"><FaXTwitter className={styles.social_icons}/></a>
            <a href="https://linkedin.com/in/zxayler"><FaLinkedin className={styles.social_icons} /></a>
          </div>
          <div><p>Create, Brainstorm, Innovate</p></div>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.aboutme}>
          <Image className= {styles.profile}src={zach} alt="profile"/>
          <div className={styles.aboutzach}>
            <p className={styles.name}>ZACH DAVID</p>
            <p className={styles.title}>Backend Developer | Full Stack in Training</p>
            <p className={styles.description}>I am a current second year computer science student. I focus with learning everything there is to know about software. One of my biggest projects was a dating app implemented with the Discord API and can be connected with other communities.</p>
          </div>
        </div>
      </div>
      <div className={styles.tools}>
          <div className={styles.toollist}>
            
            <Tool icon={<FaPython size={48}/>} title="Python" value={"A powerful language I use for everything."}/>
            <Tool icon={<IoLogoJavascript size={48}/>} title="JavaScript" value={"A powerful language for the web"}/>
            <Tool icon={<FaRust size={48}/>} title="Rust" value={"(still learning)"}/>
          </div>
          <h1>My Tools</h1>
            
          <div className={styles.toollist}>
            <Tool icon={<SiVisualstudiocode size={48}/>} title="visual studio code" value={"My favorite code editor."}/>
            <Tool icon={<SiLunacy size={48}/>} title="Lunacy" value={"Faster than Figma"}/>
            <Tool icon={<SiZorin size={48}/>} title="Zorin OS" value={"My current operating system."}/>
          </div>
      </div>
      <div className={styles.projects}>

      </div>
    </main>
  );
}
