import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';

function AnswerButton({ question, answerId, num, handleAnswerClick }) {

    let { results, wrong, buttonIds } = useSelector((state) => state.quiz);

    const trueAnswer = results.includes(question.id);
    const wrongQuestionId = wrong.includes(question.id);
    const wrongAnswer = buttonIds.includes(answerId);

    const disableStyle = ((trueAnswer && question[`answer${num}Check`]) || question[`answer${num}Check`]) 
        ? {'&:disabled': {backgroundColor: '#2e7d32', color: '#fff'}} 
        : (!wrongAnswer) ? {'&:disabled': {backgroundColor: '#3f51b5', color: '#fff'}} 
        : {'&:disabled': {backgroundColor: '#d32f2f', color: '#fff'}};
    
    return (
        <Button 
            sx={{
                ...disableStyle,
                width: '100%',
                borderBottom: '1px solid #ccc',
                height: '40px',
                padding: '0',
                marginLeft: '0',
                borderRadius: '0',
                textTransform: 'none',
            }} 
            disabled={trueAnswer || wrongQuestionId}
            variant="contained"
            onClick={() => {handleAnswerClick(question.id, `answer${num}Check`)}}
        >
            {question[`answer${num}`]}
        </Button>
    );
}

export default AnswerButton;