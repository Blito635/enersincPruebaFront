import { Button, Grid, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deletePersonas, getPersonas } from '../../../store/slices/datapersonas'

const EliminarPersona = () => {
  const navigate = useNavigate();
  const { documento } = useParams();
  const dispatch = useDispatch();
  const { isLoading, personas} = useSelector( state => state.data)
  useEffect(() => {
    dispatch(getPersonas(documento));
  }, []);
  return (
    <Container fixed>
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 600,
      height: 400,
    }}
  >
    {personas.length === 1 ?
     (<Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
    <TextField
        id="nombre"
        label="Nombres"
        defaultValue={personas[0].nombres}
        InputProps={{
          readOnly: true,
        }}
      />
      </Grid>
      <Grid item xs={6}>
    <TextField
        id="Apellido"
        label="Apellidos"
        defaultValue={personas[0].apellidos}
          InputProps={{
            readOnly: true,
          }}
      />
      </Grid>
      <Grid item xs={6}>
    <TextField
        id="number"
        label="N° Documento"
        value={documento}
        InputProps={{
          readOnly: true,
        }}
      
      />
      </Grid>
      <Grid item xs={6}>
      <TextField
        id="tipoDocumento"
        label="Tipo documento"
        value={personas[0].tipo_de_documento}
        InputProps={{
          readOnly: true,
        }}
      >
      
      </TextField>
      </Grid>

      <Grid item xs={13} >
    <TextField
        id="hobbie"
        label="Hobbie"
        value={personas[0].hobbie}
        InputProps={{
          readOnly: true,
        }}
      />
      </Grid>

    </Grid>):("")}
      <Button 
      disabled={isLoading}
      onClick={()=>{
        dispatch(deletePersonas(documento))
        navigate('/')
        }}>
        Delete
      </Button>
</Box>
</Container>
  )
}

export default EliminarPersona