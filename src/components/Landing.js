import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Landing() {

    const [lang, setLang] = useState("html");

    return (

        <div className="container">

            <div className="row">
                
                <h2 className="intro-title">
                    Test Your Programming Language Level!
                </h2>

                <div className="landing-select">

                    <FontAwesomeIcon className="chevron-down" icon={faChevronDown} />

                    <select onChange={(e) => setLang(e.target.value)}>

                        <option value="html">Html</option>

                        <option value="css">Css</option>

                        <option value="javascript">Javascript</option>

                    </select>

                </div>

            </div>

            <h4 className="sub-text">Good Luck</h4>

            <Link to={lang} className="btn">Started The {lang} Quiz</Link>

        </div>

    );
    
}

export default Landing;