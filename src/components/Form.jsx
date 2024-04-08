import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div style={{"paddingTop":"80px"}}>
        <Typography variant='h3'>ADD BLOG FORM</Typography><br></br><br></br>
        <TextField id="outlined-basic" label="BLOG NAME" variant="outlined" />
        <br></br><br></br>
        <TextField id="filled-basic" label="DESCRIPTION" variant="outlined" />
        <br></br><br></br>
        <TextField id="standard-basic" label="AUTHOR NAME" variant="outlined" />
        <br></br><br></br>
        <Button variant="contained" color='error'>SUBMIT</Button>
    </div>
  )
}

export default Form