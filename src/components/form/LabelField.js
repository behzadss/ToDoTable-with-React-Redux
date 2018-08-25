import React from 'react';
import format from 'date-fns/format';
import Typography from '@material-ui/core/Typography';

export default function LabelField({ input, type, ...other }) {

  let text = '';

  switch (type) {
    case 'date':
      text = format(input.value, 'DD/MM/YYYY');
      break;
    case 'status':
      text = input.value ? 'Done' : 'Pending';
      break;
    default:
      text = input.value;
      break
  }

  return (
    <Typography variant="body1" {...other}>
      {text}
    </Typography>
  )
}
