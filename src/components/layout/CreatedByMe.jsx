import { Typography } from '@mui/material'
import React from 'react'
import { Link,redirect } from 'react-router-dom'

const CreatedByMe = () => {
  return (
    <Typography textAlign="center"  sx={{fontSize:20 , fontWeight:"700", position:"absolute", bottom:50, left:"45%"}}>Created By  <Link rel="github" to="https://github.com/Dev-Harshxl" style={{color:"red", marginLeft:"10px"}}>  @Harshal</Link></Typography>
  )
}

export default CreatedByMe