import Button from '@mui/material/Button';

function ScoreButton({ onResultOpen }) {
    return (
        <Button 
            sx={{ 
                position: 'absolute', 
                top: '70px', 
                right: '70px'
            }} 
            variant="contained" 
            onClick={() => onResultOpen()}
        >
            Score
        </Button>
    );
}

export default ScoreButton;