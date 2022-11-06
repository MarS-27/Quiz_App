import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

function AnswerInput({ num, values, handleChange }) {
    return (
       <Box sx={{ width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
            <Checkbox
                name={`answer${num}Check`}
                checked={values[`answer${num}Check`]}
                onChange={handleChange}
            />
            <TextField
                sx={{ width: '94%' }}
                name={`answer${num}`}
                label={`Answer №${num}`}
                type='text'
                variant='outlined' 
                value={values[`answer${num}`]}
                onChange={handleChange}
            />
        </Box>  
    );  
}

export default AnswerInput;