import React from 'react';
import DatePicker from 'material-ui-pickers/DatePicker';

export default function TextField({input, meta:{error,touched},...other}){
    const showError = touched && !!error;
    return (
        <DatePicker
        {...input} 
        error={showError}
        helperText={showError ? error : undefined}
        {...other}
        format="DD/MM/YY" />
    )
}