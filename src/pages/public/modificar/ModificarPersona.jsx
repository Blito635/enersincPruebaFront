import { Button, Grid, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPersonas, putPersonas } from '../../../store/slices/datapersonas'

const ModificarPersona = () => {
  const { isLoading, personas} = useSelector( state => state.data)
  const { documento } = useParams();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [apellido, setApellido] = useState(null)
  const [hoobie, setHoobie] = useState(null)
  

  useEffect(() => {
    dispatch(getPersonas(documento));

  }, [dispatch,documento]);
  
useEffect(()=>{
  setName(personas[0].nombres)
  setApellido(personas[0].apellidos)
  setHoobie(personas[0].hobbie)
},[personas])
  

  
  const dataModificadaPersona={
    apellidos: apellido,
    hobbie: hoobie,
    nombres: name,
}
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
        onChange={(e)=>{
          setName(e.target.value)}}
      />
      </Grid>
      <Grid item xs={6}>
    <TextField
        id="Apellido"
        label="Apellidos"
        defaultValue={personas[0]?.apellidos}
        onChange={(e)=>{
          setApellido(e.target.value)}}  
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
        value={personas[0]?.tipo_de_documento}
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
        defaultValue={personas[0]?.hobbie}
        onChange={(e)=>{
          setHoobie(e.target.value)}}
      />
      </Grid>

    </Grid>):("")}
      <Button 
      disabled={isLoading}
      onClick={()=>{
        dispatch(putPersonas(documento,dataModificadaPersona))
        navigate('/')
        }}>
        Change
      </Button>
 </Box>
 </Container>
  )
}

export default ModificarPersona