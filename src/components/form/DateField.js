import React, { Component } from 'react';
import DatePicker from 'material-ui-pickers/DatePicker';
import {reduxForm, Field} from 'redux-form';

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