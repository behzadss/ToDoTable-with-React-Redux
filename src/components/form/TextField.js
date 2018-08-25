import React from 'react';
import MuiTextField from '@material-ui/core/TextField';

export default function TextField({input, meta:{error,touched},...other}){
    const showError = touched && !!error;
    return (
        <MuiTextField
        {...input} 
        error={showError}
        helperText={showError ? error : undefined}
        {...other} />
    )
}