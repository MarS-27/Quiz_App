import { useSelector } from 'react-redux';
import { NUM_OF_ANSWERS } from '../../constants/constants';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AnswerButton from '../buttons/AnswerButton';
import Stack from '@mui/material/Stack';
import InfoButton from '../buttons/InfoButton';
import ScoreButton from '../buttons/ScoreButton';

function QuestionCard({ question, handleAnswerClick, onInfoOpen, onResultOpen, checkTrue, checkWrong }) {
    let { isFinished } = useSelector((state) => state.quiz);

    return (
        <Box 
            sx={{ 
                width: '100%', 
                borderRight: '1px solid #ccc', 
                borderLeft: '1px solid #ccc',  
                backgroundColor: 'background.default',
                position: 'relative' 
            }}
        >
            <Typography 
                sx={{ padding: '8px' }} 
                variant="h5"
            >
                {question.question}
            </Typography>
            {checkTrue || checkWrong ? <InfoButton onInfoOpen={onInfoOpen}/> : null}
            {isFinished ? <ScoreButton onResultOpen={onResultOpen} /> : null}
            <CardMedia
                sx={{ border: '20px solid #585858', maxHeight: '300px', objectFit: 'fill' }} 
                component="img"
                width="100%"
                image={question.image}
                alt={`Question №${question.id}`}
            />
            <Stack direction="column">
                {NUM_OF_ANSWERS.map((num) => (
                    <AnswerButton 
                        key={num}
                        num={num}
                        answerId={`${question.id}answer${num}Check`}
                        question={question}
                        handleAnswerClick={handleAnswerClick}
                    />
                ))}
            </Stack>   
        </Box>
    );
}

export default QuestionCard;