import { Alert, AlertTitle, Button, Grid, MenuItem, TextField,IconButton,Snackbar } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Notifay from '../../../components/Notifay';
import { postPersonas } from '../../../store/slices/datapersonas';

const currencies = [
  {
    value: 'CC',
    label: 'CC',
  },
  {
    value: 'Ti',
    label: 'Ti',
  },
  {
    value: 'CE',
    label: 'CE',
  },
  {
    value: 'Pasaparote',
    label: 'Pasaporte',
  },
];



const CrearPersona = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, dataPost} = useSelector( state => state.data)
  const [currency, setCurrency] = useState('CC');
  const [name, setName] = useState(null);
  const [apellido, setApellido] = useState(null)
  const [hoobie, setHoobie] = useState(null)
  const [documento, setDocumento] = useState(null)
  const [open, setOpen] = useState(false)

  console.log(dataPost);


  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const dataPersona={
    apellidos: apellido,
    hobbie: hoobie,
    id_documento: documento,
    nombres: name,
    tipo_de_documento: currency
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
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
    >
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
      <TextField
          required
          id="nombre"
          label="Nombre"
          onChange={(e)=>{setName(e.target.value)}}
        />
        </Grid>
        <Grid item xs={6}>
      <TextField
          required
          id="Apellido"
          label="Apellido"
          onChange={(e)=>{setApellido(e.target.value)}}
        />
        </Grid>
        <Grid item xs={6}>
      <TextField
          id="number"
          label="N° Documento"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>{setDocumento(e.target.value)}}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          id="tipoDocumento"
          select
          label="Tipo documento"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>

        <Grid item xs={13} >
      <TextField
          required
          id="hobbie"
          label="Hobbie"
          onChange={(e)=>{
            
            setHoobie(e.target.value)
          }}
        />
        </Grid>

      </Grid>
      <Button 
      disabled={isLoading}
      onClick={()=>{
        dispatch(postPersonas(dataPersona))
        navigate('/')
        
        }}>
        Create
      </Button>
      </Box>
      </Container>
  )
}

export default CrearPersona