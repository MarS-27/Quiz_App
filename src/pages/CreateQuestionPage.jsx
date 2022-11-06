import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    fetchQuestions,
    removeQuestion,
} from '../store/quiz/actions';
import Box from '@mui/material/Box';
import QuestionsList from '../components/questionsList/QuestionsList';
import EditForm from '../components/forms/EditForm';
import AddButton from '../components/buttons/AddButton';
import AddQuestionForm from '../components/forms/AddForm';
import Loader from '../components/loader/Loader';
import ErrorModal from '../components/error/ErrorModal';

function CreateQuestion() {
    let { questions, loading, error } = useSelector((state) => state.quiz);
    const dispatch = useDispatch();

    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
  
    const onEditOpen = () => setOpenEdit(true);
  
    const onAddNewBtnClick = () => setOpenAdd(true);
  
    const closeForm = () => {
        setOpenAdd(false);
        setOpenEdit(false);
        setSelectedQuestion(null);
    };
  
    const onQuestionSelect = (question) => {
      setSelectedQuestion(question);
    };
    
    function handleRemoveQuestion(id) {
        dispatch(removeQuestion(id));
    }

    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);

    return (
        <Box sx={{ width: '70%', margin: '0 auto' }}>
            {loading ? <Loader /> : null}
            {error ? <ErrorModal error={error} /> : null}
            {!openAdd ? (
            <>
                <QuestionsList 
                    questions={questions}
                    onEditOpen={onEditOpen}
                    onQuestionSelect={onQuestionSelect}
                    removeQuestion={handleRemoveQuestion}
                />
                <AddButton 
                    fixed={{ 
                        position: 'fixed', 
                        bottom: '40px',
                        right: '40px',
                    }} 
                    click={onAddNewBtnClick} 
                />
            </>
            ) : (
                <AddQuestionForm onCancel={closeForm} />
            )}
            {selectedQuestion ? (
               <EditForm 
                    open={openEdit} 
                    onCancel={closeForm}
                    selectedQuestion={selectedQuestion}
                    setSelectedQuestion={setSelectedQuestion}
               /> 
            ) : null}
        </Box>
    );
}
  
export default CreateQuestion;
