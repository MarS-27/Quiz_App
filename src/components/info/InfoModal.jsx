import React from 'react';
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
  width: '50%',
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

function InfoModal({ info, open, onClose }) {

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
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
                variant="h4" 
                component="h4"
            >
                Explanation!
            </Typography>
            <Typography
                d="transition-modal-description" 
                variant="h6" 
                sx={{ mt: 2 }}
            >
                {info}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default InfoModal;