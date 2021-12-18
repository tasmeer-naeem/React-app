import React from 'react'
import "./Header.css"
import people from '../../Components/Assets/people.png'
import ai from '../../Components/Assets/ai.png'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" >
        <div className="gpt3__header-content">
        <h1 className="gradient__text" >Let's building something amazing with gpt3 open AI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt3__header-content__input" >
        <input type="email" placeholder="Your Email Address"/>
        <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
        <img src={people} alt="people.png"/>
        <p>loremloremloremloremloremlorem</p>
        </div>
        </div>
        <div className="gpt3__header-image">
        <img src={ai}  alt="ai.png"/>
        </div>
        </div>
    )
}

export default Header
