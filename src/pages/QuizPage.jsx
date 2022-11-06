import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { 
  fetchQuestions,
  activeQuestionClick,
  answerClick,
  newQuiz,
} from '../store/quiz/actions';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import Loader from '../components/loader/Loader';
import ErrorModal from '../components/error/ErrorModal';
import QuestionCard from '../components/questionCard/QuestionCard'
import FinishQuiz from '../components/finish/FinishQuizModal';
import InfoModal from '../components/info/InfoModal';

function Quiz() {
  let { questions, loading, activeQuestion, error, results, wrong } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  
  const theme = useTheme();

  const [openInfo, setOpenInfo] = useState(false);
  const [openResult, setOpenResult] = useState(false);

  const onInfoOpen = () => setOpenInfo(true);
  const closeInfoForm = () => setOpenInfo(false);

  const onResultOpen = () => setOpenResult(true);
  const closeResultForm = () => {
    dispatch(newQuiz());  
    setOpenResult(false);
  };
 
  const maxSteps = questions.length;
  const nextButtonActiveCheckTrue = questions[activeQuestion] ? results.includes(questions[activeQuestion].id) : null;
  const nextButtonActiveCheckWrong = questions[activeQuestion] ? wrong.includes(questions[activeQuestion].id) : null;

  const handleNext = () => {
    dispatch(activeQuestionClick(activeQuestion + 1));
  };

  const handleBack = () => {
    dispatch(activeQuestionClick(activeQuestion - 1));
  };

  const handleAnswerClick = (id, answer) => {
    dispatch(answerClick(id, answer));
  };

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <Box sx={{ width: '70%', margin: '0 auto' }}>
      {loading ? <Loader /> : null}
      {openResult ? (
        <FinishQuiz 
          open={openResult} 
          onClose={closeResultForm} 
          maxSteps={maxSteps}
          results={results}
          // info={questions[activeQuestion].explanation}
      />) : null}
      {error ? <ErrorModal error={error} /> : null}
      {openInfo ? (
        <InfoModal 
          open={openInfo} 
          onClose={closeInfoForm} 
          info={questions[activeQuestion].explanation}
      />) : null}
      <Card sx={{ maxWidth: 500, margin: '0 auto', borderRadius: '0', boxShadow: 'none' }}>
        <MobileStepper
          sx={{ border: '1px solid #ccc' }}
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeQuestion}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={(activeQuestion === maxSteps - 1) || (!nextButtonActiveCheckTrue && !nextButtonActiveCheckWrong)}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button 
              size="small" 
              onClick={handleBack} 
              disabled={activeQuestion === 0}
            >  
              {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
              ) : (
                  <KeyboardArrowLeft />
              )}
              Back 
            </Button>
          }
        />
        {questions[activeQuestion] ? (
          <QuestionCard 
            question={questions[activeQuestion]}
            onInfoOpen={onInfoOpen}
            onResultOpen={onResultOpen}
            handleAnswerClick={handleAnswerClick}
            checkTrue={nextButtonActiveCheckTrue}
            checkWrong={nextButtonActiveCheckWrong}
          />
        ) : null}
      </Card>
    </Box> 
  );
}
  
export default Quiz;
