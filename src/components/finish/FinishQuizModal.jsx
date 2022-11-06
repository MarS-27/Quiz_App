import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TryAgainButton from '../buttons/TryAgainButton';

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

function FinishQuiz({ open, onClose, maxSteps, results }) {
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography 
              id="transition-modal-title" 
              sx={{ textAlign: 'center' }} 
              variant="h1" 
              component="h2"
            >
              Awesome!
            </Typography>
            <Typography
              d="transition-modal-description" 
              variant="h4" 
              sx={{ mt: 2, textAlign: 'center' }}
            >
              {`Your score: ${results.length}/${maxSteps}`}
            </Typography>
            <TryAgainButton onClose={onClose} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default FinishQuiz;