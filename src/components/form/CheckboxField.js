
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxField({ input: { value, ...input }, ...other }) {

  return (
    <Checkbox {...input} checked={value} {...other} />
  )
}
