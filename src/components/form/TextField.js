import MuiTextField from '@material-ui/core/TextField';
import {reduxForm, Field} from 'redux-form';

export default function TextField({input, meta:{error,touched},...other}){
    const showError = touch && !!error;
    return (
        <MuiTextField
        {...input} 
        error={showError}
        helperText={showError ? error : undefined}
        {...other} />
    )
}