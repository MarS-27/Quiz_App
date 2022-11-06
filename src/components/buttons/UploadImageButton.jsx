import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function UploadButton({ onChange }) {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button 
                sx={{ 
                    display: "block", 
                    marginRight: '10px',
                    textAlign: "center",
                }}  
                variant="contained" 
                component="label"
            >
                Upload image
                <input 
                    hidden
                    name='image'
                    accept="image/*" 
                    type="file" 
                    onChange={onChange}
                />
            </Button>
        </Stack>
    );
}

export default UploadButton;