import { createSlice } from '@reduxjs/toolkit'


export const dataSlice = createSlice({
  name: 'data',
  initialState:{
    personas:[],
    isLoading: false,
    isCorrect:null,
    dataPost:[],
  },
  reducers: {
    startLoadingPersonas: (state,) => {
      state.isLoading= true;
    },
    setPersonas: (state, action)=>{
        state.isLoading= false;
        state.personas=action.payload.personas
        state.isCorrect=action.payload.isCorrect

    },
    createPersona:(state, action)=>{
        state.isLoading= false;
        state.personas=action.payload.personas
        state.dataPost=action.payload.dataPost
    },
    removePersona:(state, action)=>{
        state.isLoading= false;
    },
    modifyPersona:(state,action)=>{
        state.isLoading= false;
        state.personas=action.payload.personas
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPersonas,startLoadingPersonas,createPersona,removePersona,modifyPersona} = dataSlice.actions;

// export default counterSlice.reducer