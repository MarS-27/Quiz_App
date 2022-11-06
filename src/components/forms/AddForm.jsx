import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewQuestion } from '../../store/quiz/actions';
import { EMPTY_QUESTION, NUM_OF_ANSWERS } from '../../constants/constants';
import { getBase64 } from '../../services/getBase64';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import UploadButton from '../buttons/UploadImageButton';
import AnswerInput from './AnswerInput';

function AddQuestionForm({ onCancel }) {
    const [values, setValues] = useState(EMPTY_QUESTION);
    const dispatch = useDispatch();

    function onFormSubmit(e) {
      e.preventDefault();
      dispatch(createNewQuestion(values));
      resetForm();
      onCancel();
    }
  
    function resetForm() {
      setValues(EMPTY_QUESTION);
    }
  
    function handleChange(e) {
      if (e.target.name === "image") {
        getBase64(e.target.files[0])
          .then(data => {
            setValues({ ...values, [e.target.name]: data });
          }) 
      } else if (
        e.target.name === "answer1Check" || 
        e.target.name === "answer2Check" || 
        e.target.name === "answer3Check" || 
        e.target.name === "answer4Check" 
      ) {
        setValues({ ...values, [e.target.name]: e.target.checked });
      } 
      else {
        setValues({ ...values, [e.target.name]: e.target.value });
      }
    }

  return (
    <form action="" onSubmit={onFormSubmit}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <UploadButton elem={values.image} onChange={handleChange}/>
        <TextField 
          sx={{ width: '78%' }}
          name='question'
          label='Question'
          type='text'
          variant='outlined' 
          multiline 
          value={values.question}
          onChange={handleChange}
        />
      </Box>
      <TextField 
        sx={{ width: '100%', marginTop: '20px'}}
        name='explanation'
        label='Explanation'
        type='text'
        variant='outlined' 
        multiline 
        value={values.explanation}
        onChange={handleChange}
      />
      {NUM_OF_ANSWERS.map((num) => (
        <AnswerInput
          key={num}
          num={num}
          values={values}
          handleChange={handleChange}
        />
      ))}
      <Stack sx={{ marginTop: '20px' }} spacing={2} direction="row">
        <Button sx={{ width: "100%"}} type="submit" variant="outlined">Save</Button>
        <Button sx={{ width: "100%"}} type="button" variant="contained" onClick={onCancel}>Cancel</Button>
      </Stack>
    </form>
  );
}

export default AddQuestionForm;