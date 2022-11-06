import React from 'react';
import Box from '@mui/material/Box';
import QuestionsListItem from './QuestionsListItem';

function QuestionsList({ questions, onEditOpen, onQuestionSelect, removeQuestion }) {

    return (
        <Box sx={{ width: '100%' }}>
            {questions.map((question) => (
                <QuestionsListItem 
                    key={question.id}
                    question={question}
                    onEditOpen={onEditOpen}
                    onQuestionSelect={onQuestionSelect}
                    removeQuestion={removeQuestion}
                />)
            )}
        </Box>
    );
}

export default QuestionsList;