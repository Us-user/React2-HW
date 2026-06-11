import { createSlice, isAction } from '@reduxjs/toolkit'

export interface dataItem{
    id:number,
    name:string,
    surname:string,
    status: boolean
}

export interface data{
    dataR: dataItem[]
}

const initialState:data={
    dataR:[
        {
            id:1,
            name:'abu',
            surname:'Smith',
            status: false
        },
        {
            id:2,
            name:'Abuumar',
            surname:"Sharipov",
            status: true
        }
    ]
}

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    deleteUser:(state,{payload})=>{
        state.dataR=state.dataR.filter((el)=>el.id!-payload)
    },
    addUserR:(state,{payload})=>{
        state.dataR.push(payload)
    },
    editUserR:(state,{payload})=>{
        state.dataR = state.dataR.map((el)=>el.id==payload.id ? {id: payload.id,name: payload.name,surname: payload.surname, status: payload.status}:el)
    },
    editStatusUser:(state,{payload})=>{
        state.dataR = state.dataR.map((el)=>el.id==payload ? {...el, status: !el.status}:el)
    }
  }
})

export const { deleteUser, addUserR, editUserR, editStatusUser  } = dataSlice.actions

export default dataSlice.reducer