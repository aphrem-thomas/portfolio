import React from 'react'

export default function LangSkill(props) {
    return (
        <div className="LangSkill-wrapper">
            <div className="LangSkill-img">
                <img className="LangSkill-logo" src={props.logo}/>
                <div className="LangSkill-name">{props.name}</div>
                <div className="LangSkill-skill">
                    <div className="LangSkill-meter" style={{width:`${props.value}%`}}></div>
                </div>
            </div>
        </div>
    )
}
