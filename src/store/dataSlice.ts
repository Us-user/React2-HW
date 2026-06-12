import { createSlice } from '@reduxjs/toolkit'


export interface itemDate{
    id:number,
    name:string,
    surname:string,
    status:boolean
}

export interface data{
    dataR: itemDate[]

}

export const initialState:data={
    dataR:[
        {
            id:1,
            name:'Abuumar',
            surname:'Sharipov',
            status:true
        },
        {
            id:2,
            name:'abu',
            surname:'John',
            status:false
        }
    ]
}

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    deleteUserR:(state,{payload})=>{
        state.dataR=state.dataR.filter(el=>el.id!=payload)
    },
    addUserR:(state,{payload})=>{
        state.dataR=[...state.dataR,payload]
    },
    editStatus:(state,{payload})=>{
        state.dataR=state.dataR.map((el)=>el.id==payload ? {...el,status:!el.status}:el)
    },
    editUserR:(state,{payload})=>{
        state.dataR=state.dataR.map((el)=>el.id==payload.id ? {
            id:payload.id,
            name:payload.name,
            surname:payload.surname,
            status:el.status
        }:el)
    }
    
    
  }
})

export const { deleteUserR,addUserR, editStatus, editUserR } = dataSlice.actions

export default dataSlice.reducer