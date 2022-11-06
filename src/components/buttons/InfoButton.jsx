import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function InfoButton({ onInfoOpen }) {
    return (
        <IconButton 
            sx={{ 
                position: 'absolute', 
                top: '62px', 
                right: '15px'
            }} 
            size="medium" 
            onClick={() => onInfoOpen()}
        >
            <InfoIcon sx={{ color: '#fff'}} color='primary' fontSize="large"/>
        </IconButton>
    );
}

export default InfoButton;

