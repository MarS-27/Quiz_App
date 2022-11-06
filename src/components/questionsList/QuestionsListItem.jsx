import React from 'react';
import { NUM_OF_ANSWERS } from '../../constants/constants';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardMedia from '@mui/material/CardMedia';
import ButtonsStack from '../buttons/ButtonsStack'
import List from '@mui/material/List';
import AnswerInfo from './AnswerInfo';

function QuestionsListItem({ question, onEditOpen, onQuestionSelect, removeQuestion }) {

    const onDeleteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        removeQuestion(question.id);
    };
      
    const onEditClick = () => {
        onEditOpen();
        onQuestionSelect(question);
    };
   
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${question.id}a-content`}
                id={`panel${question.id}a-header`}
            >
                <Typography variant="h5">
                    {question.question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {question.image ? (
                    <CardMedia
                        sx={{ border: '20px solid #585858', maxHeight: "400px", objectFit: 'fill' }}
                        component="img"
                        width="100%"
                        height="100%"
                        image={question.image}
                        alt={`Question №${question.id}`}
                    />
                ) : null}
                <Typography variant="subtitle1" sx={{ marginTop: '20px'}}>
                    {question.explanation}
                </Typography>
                <List>
                    {NUM_OF_ANSWERS.map((num) => (
                        <AnswerInfo 
                            key={num}
                            num={num}
                            question={question}
                        />
                    ))}
                </List>
                <ButtonsStack onDeleteClick={onDeleteClick} onEditClick={onEditClick} />
            </AccordionDetails>
        </Accordion>
    );
}

export default QuestionsListItem;