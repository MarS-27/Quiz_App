import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function AddButton({ click, fixed }) {
    return (
        <Fab sx={fixed} color="primary" aria-label="add" onClick={click}>
            <AddIcon />
        </Fab>
    );
}

export default AddButton;