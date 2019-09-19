import React from 'react';
import reactLogo from '../../../../images/logos/logo.svg'
import js from '../../../../images/logos/js.svg'
import node from '../../../../images/logos/node.svg'

import aphremPhoto from "../../../../images/aphrem-BlackBG.jpg";
import './skills.css'
import LangSkill from '../LangSkill/LangSkill';
const Skills = () => {
    return (
        <div id="skills-page" className="skills-wrapper">
          <h1>Skills</h1>
          <div className="skills-info">
           <div className="skills-indiv">
             <LangSkill name="React JS" logo={reactLogo} value={90} color={'green'}/>
           </div>
           <div className="skills-indiv">
           <LangSkill name="Javascript" logo={js} value={90} color={'green'}/>
           </div>
           <div className="skills-indiv">
            <LangSkill name="Node JS" logo={node} value={70} color={'blue'}/>
            </div>
          </div>
        </div>
    );
}

export default Skills;