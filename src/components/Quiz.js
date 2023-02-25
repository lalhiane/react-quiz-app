import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/date.json";
import Results from "./QuizResults";
import SingleQuestion from "./SingleQuestion";

function Quiz(props) {

    const { lang } = useParams(props);

    const [question, setQuestion] = useState({});

    const [currentIndex, setCurrentIndex] = useState(0);

    const [chosenAnswer, setChosenAnswer] = useState("");

    const [rightAnswers, setRightAnswers] = useState(0);

    const [disabled, setDisabled] = useState("");

    useEffect(() => {

        setQuestion(data[lang][currentIndex]);

        document.querySelectorAll("input").forEach(input => input.checked = false);

        setDisabled("disabled");

    }, [currentIndex]);
    
    const next = () => {

        if (chosenAnswer === question.right_answer) setRightAnswers(rightAnswers + 1);

        if (currentIndex < data[lang].length) setCurrentIndex(currentIndex + 1);

    }

    const getChosedAnswer = (answer) => {

        setChosenAnswer(answer);

        setDisabled("visibled");

    }

    return currentIndex >= data[lang].length ? (

        <Results
            
            rightAnswers={rightAnswers}

            length={data[lang].length}

        />

    ) : (
            
        <SingleQuestion
                
            currentIndex={currentIndex}
                
            getChosedAnswer={getChosedAnswer}
                
            length={data[lang].length}
                
            question={question}
                
                next={next}
                
                disabled={disabled}
                
        />
    );

}

export default Quiz;