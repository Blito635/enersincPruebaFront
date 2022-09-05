import { Box, Button, Grid, IconButton, Snackbar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPersonas,
} from "../../store/slices/datapersonas";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Notifay from "../../components/Notifay";


const columns = [
  { field: "id_documento", headerName: "Documento", width: 150 },
  { field: "tipo_de_documento", headerName: "Tipo documento", width: 150 },
  { field: "apellidos", headerName: "Apellidos", width: 150 },
  { field: "nombres", headerName: "Nombre", width: 150 },
  { field: "hobbie", headerName: "Hobbie", width: 150 },
];

const Menu = () => {
  const dispatch = useDispatch();
  const { personas = [], dataPost } = useSelector((state) => state.data);
  const [dataDocumento, setDataDocumento] = useState(null);
  useEffect(() => {
    dispatch(getPersonas());
  }, [dispatch]);



  const rows = useMemo(() => {
    return personas?.map((valor, index) => {
      return { ...valor, id: index };
    });
  }, [personas]);



  return (
    <div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          onCellClick={(e) => {
            setDataDocumento(e.row.id_documento);
          }}
        />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={4}>

            <Link to="/crear">
              <CreateIcon fontSize="large"></CreateIcon>
            </Link>

        </Grid>
        <Grid item xs={4}>

            { dataDocumento &&
              (<Link to={`/eliminar/${dataDocumento}`}>
              <DeleteIcon fontSize="large"></DeleteIcon>
            </Link>)}

        </Grid>
        <Grid item xs={4}>
            { dataDocumento &&
            (<Link to={`/modificar/${dataDocumento}`}>
              <AutoFixHighIcon fontSize="large"></AutoFixHighIcon>
            </Link>)}
        </Grid>
      </Grid>
      
    </div>
  );
};

export default Menu;
