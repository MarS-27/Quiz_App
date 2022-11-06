import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';

function AnswerInfo({ num, question }) {
    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={question[`answer${num}Check`]}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText>{question[`answer${num}`]}</ListItemText> 
        </ListItem>
    );  
}

export default AnswerInfo;