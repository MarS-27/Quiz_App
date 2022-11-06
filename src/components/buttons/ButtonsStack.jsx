import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ButtonStack({ onDeleteClick, onEditClick }) {
    return (
        <Stack spacing={2} direction="row">
            <Button sx={{ width: "100%"}} variant="outlined" onClick={onEditClick}>Edit</Button>
            <Button sx={{ width: "100%"}} variant="contained" onClick={onDeleteClick}>Delete</Button>
        </Stack>
    )
}

export default ButtonStack;