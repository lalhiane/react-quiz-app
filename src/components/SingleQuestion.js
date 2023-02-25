function SingleQuestion(props) {

    const { currentIndex, handleChange, length, question,
        next, checked, nextButtonDisabled } = props;

    const { title, answer_1, answer_2, answer_3, answer_4 } = question;

    const isBtnDisabled = nextButtonDisabled ? "disabled" : "";

    return (

        <div className="container">

            <h2 className="intro-title">Quiz App</h2>

            <h4 className="sub-text">Question {currentIndex + 1} of {length}</h4>

            <h3 className="question-title">{title}</h3>

            <form className="quiz-form">

                <label className="question-label">

                    <input type="radio"
                        name="samename"
                        value={1}
                        checked={checked === 1}
                        onChange={(e) => handleChange(e, answer_1)}
                    />
                    
                    <span className="checkmark"></span>

                    {answer_1}

                </label>

                <label className="question-label">

                    <input type="radio"
                        name="samename"
                        value="2"
                        checked={checked === 2}
                        onChange={(e) => { handleChange(e, answer_2) }}
                    />

                    <span className="checkmark"></span>

                    {answer_2}

                </label>

                <label className="question-label">

                    <input type="radio"
                        name="samename"
                        value="3"
                        checked={checked === 3}
                        onChange={(e) => { handleChange(e, answer_3) }}
                    />

                    <span className="checkmark"></span>

                    {answer_3}

                </label>

                <label className="question-label">

                    <input type="radio"
                        name="samename"
                        value="4"
                        checked={checked === 4}
                        onChange={(e) => { handleChange(e, answer_4) }}
                    />

                    <span className="checkmark"></span>

                    {answer_4}

                </label>

            </form>

            <button className={`btn submit-btn ${
                nextButtonDisabled ? "disabled" : ""
            }`}
                onClick={next}>
                Next
            </button>

        </div>

    );
    
}

export default SingleQuestion;