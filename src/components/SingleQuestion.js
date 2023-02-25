function SingleQuestion(props) {

    const { currentIndex, getChosedAnswer, length, question, next, disabled } = props;

    const { title, answer_1, answer_2, answer_3, answer_4 } = question;

    return (

        <div className="container">

            <h2 className="intro-title">Quiz App</h2>

            <h4 className="sub-text">Question {currentIndex + 1} of {length}</h4>

            <h3 className="question-title">{title}</h3>

            <form className="quiz-form">

                <label className="question-label">

                    <input type="radio"
                        name="samename"
                        onChange={() => getChosedAnswer(answer_1)}
                    />
                    
                    <span className="checkmark"></span>

                    {answer_1}

                </label>

                <label className="question-label">

                    <input type="radio"
                        name="samename"
                        onChange={() => { getChosedAnswer(answer_2) }}
                    />

                    <span className="checkmark"></span>

                    {answer_2}

                </label>

                <label className="question-label">

                    <input type="radio"
                        name="samename"
                        onChange={() => { getChosedAnswer(answer_3) }}
                    />

                    <span className="checkmark"></span>

                    {answer_3}

                </label>

                <label className="question-label">

                    <input type="radio"
                        name="samename"
                        onChange={() => { getChosedAnswer(answer_4) }}
                    />

                    <span className="checkmark"></span>

                    {answer_4}

                </label>

            </form>

            <button className={`btn submit-btn ${disabled}`} onClick={next}>
                Next
            </button>

        </div>

    );
    
}

export default SingleQuestion;