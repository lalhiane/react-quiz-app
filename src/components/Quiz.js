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

    const [checked, setChecked] = useState(5);

    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

    useEffect(() => {

        setQuestion(data[lang][currentIndex]);

        setChecked(5);

        setNextButtonDisabled(true);

    }, [currentIndex]);
    
    const next = () => {

        if (chosenAnswer === question.right_answer) {

            setRightAnswers(ra => ra + 1);

        }

        if (currentIndex < data[lang].length) {

            setCurrentIndex(ci => ci + 1);
            
        }

    }

    const handleChange = (e, answer) => {
    
        setChosenAnswer(answer);

        setNextButtonDisabled(false);

        setChecked(+e.currentTarget.value);

    }

    return currentIndex >= data[lang].length ? (

        <Results
            
            rightAnswers={rightAnswers}

            length={data[lang].length}

        />

    ) : (
            
        <SingleQuestion
                
            currentIndex={currentIndex}
                
            handleChange={handleChange}
                
            length={data[lang].length}
                
            question={question}
                
            next={next}
                
            checked={checked}
            
            nextButtonDisabled={nextButtonDisabled}
                
        />
    );

}

export default Quiz;