import Button from '@mui/material/Button';

function TryAgainButton({ onClose  }) {
    return (
        <Button 
            sx={{ width: '50%', marginTop: '20px'}}
            variant="contained" 
            onClick={() => onClose()}
        >
            Try again!
        </Button>
    );
}

export default TryAgainButton;