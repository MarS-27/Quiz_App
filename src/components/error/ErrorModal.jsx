import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

function ErrorModal({ error }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
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
                {error}
            </Typography>
            <Typography i
                d="transition-modal-description" 
                variant="h5" 
                sx={{ mt: 2, textAlign: 'center' }}
            >
                Oops, something's wrong!
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ErrorModal;