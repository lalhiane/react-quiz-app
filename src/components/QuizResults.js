import { Link } from "react-router-dom";

function Results(props) {

    const { rightAnswers, length } = props;

    const msg = rightAnswers > Math.ceil(length / 2) ?
        "Congratulation" :
        "Check Your Level"

    return (

        <div className="container">

            <div className="result">

                <p className="result-msg">

                    {msg}, You Have Got {rightAnswers} From {length}

                </p>
                
                <Link to="/" className="btn">Reload</Link>

            </div>

        </div>

    );
    
}

export default Results;