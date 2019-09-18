import React from 'react';
import './LangSkill.css';

export default function LangSkill(props) {
    return (
        <div className="LangSkill-wrapper">
            <div className="LangSkill-img">
                <img className="LangSkill-logo" src={props.logo}/>
                <div className="LangSkill-name">{props.name}</div>
                <div className="LangSkill-skill">
                    <div className="LangSkill-meter" style={{"width":`${props.value}%`,"background-color":props.color}}></div>
                </div>
            </div>
        </div>
    )
}
