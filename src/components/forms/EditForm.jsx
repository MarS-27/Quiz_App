import React from 'react';
import { useDispatch } from 'react-redux';
import { editQuestion } from '../../store/quiz/actions';
import { NUM_OF_ANSWERS } from '../../constants/constants';
import { getBase64 } from '../../services/getBase64';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import UploadButton from '../buttons/UploadImageButton';
import AnswerInput from './AnswerInput';

function EditForm({ open, onCancel, selectedQuestion, setSelectedQuestion }) {
  const dispatch = useDispatch();

  function onFormSubmit(e) {
    e.preventDefault();
    dispatch(editQuestion(selectedQuestion));
    onCancel();
  }

  function handleChange(e) {
    if (e.target.name === "image") {
      getBase64(e.target.files[0])
        .then(data => {
          setSelectedQuestion({ ...selectedQuestion, [e.target.name]: data });
        }) 
    } else if (
      e.target.name === "answer1Check" || 
      e.target.name === "answer2Check" || 
      e.target.name === "answer3Check" || 
      e.target.name === "answer4Check" 
    ) {
      setSelectedQuestion({ ...selectedQuestion, [e.target.name]: e.target.checked });
    } 
    else {
      setSelectedQuestion({ ...selectedQuestion, [e.target.name]: e.target.value });
    }
  }

  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle sx={{ paddingBottom: '0' }} variant="h5">Change question</DialogTitle>
      <form action="" onSubmit={onFormSubmit}>
        <DialogContent>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <UploadButton onChange={handleChange} />
            <TextField 
              sx={{ width: '80%' }}
              name='question'
              label='Question'
              type='text'
              variant='outlined' 
              multiline 
              value={selectedQuestion.question}
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
            rows={5}
            value={selectedQuestion.explanation}
            onChange={handleChange}
          />
          {NUM_OF_ANSWERS.map((num) => (
            <AnswerInput
              key={num}
              num={num}
              values={selectedQuestion}
              handleChange={handleChange}
            />
          ))}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between"}}>
          <Button sx={{ width: "100%"}} type="submit" variant="outlined">Save</Button>
          <Button sx={{ width: "100%"}} type="button" variant="contained" onClick={onCancel}>Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default EditForm;