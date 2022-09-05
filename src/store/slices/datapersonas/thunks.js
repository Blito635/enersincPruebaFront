
import { Alert, AlertTitle } from "@mui/material";
import { personasApi } from "../../../api/personasApi";
import { createPersona, modifyPersona, removePersona, setPersonas, startLoadingPersonas } from "./dataSlice"


export const getPersonas = (val_busqueda= "")=>{
    return async (dispatch, getState)=>{

        dispatch(startLoadingPersonas());
        const {data} = await personasApi.get(val_busqueda !== "" ? `persona?id_documento=${val_busqueda}`: 'persona');
        console.log(data);
        dispatch( setPersonas({personas: data.obj, isCorrect: data.status}));



    }
}

export const postPersonas = (datos)=>{
    return async (dispatch,getState)=>{
        dispatch(startLoadingPersonas());
        const {data} = await personasApi.post('persona',datos);
        alert(data.msg)
        dispatch( createPersona({dataPost:data}));

    }
}

export const deletePersonas = (val_busqueda)=>{
    return async (dispatch,getState)=>{
        dispatch(startLoadingPersonas());
        const {data} = await personasApi.delete(`persona?id_documento=${val_busqueda}`);
        alert(data.msg)
        dispatch( removePersona());

    }
}
export const putPersonas = (val_busqueda,datos)=>{
    return async (dispatch,getState)=>{
        dispatch(startLoadingPersonas());
        const {data} = await personasApi.put(`persona?id_documento=${val_busqueda}`,datos);
        alert(data.msg)
        dispatch( modifyPersona());

    }
}