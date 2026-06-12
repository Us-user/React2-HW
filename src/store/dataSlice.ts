import { createSlice } from '@reduxjs/toolkit'

export interface dateItem{
    id:number,
    name:string,
    surname:string,
    status:boolean
}

export interface date{
    dataR: dateItem[]
}

const initialState:date={
    dataR:[
        {
            id:1,
            name:"Abuumar",
            surname:"Sharipov",
            status:true
        },
        {
            id:2,
            name:"umar",
            surname:"Sharipov",
            status:false
        }
    ]
}

export const dataSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    deleteUserR:(state,{payload})=>{
        state.dataR=state.dataR.filter((el)=>el.id!=payload)
    },
    addUserR:(state,{payload})=>{
        state.dataR=[...state.dataR, payload]
    },
    editStatus:(state,{payload})=>{
        state.dataR=state.dataR.map((el)=>el.id==payload ? ({...el,status:!el.status}):el)
    },
    editUserR:(state,{payload})=>{
        state.dataR=state.dataR.map((el)=>el.id==payload.id ? ({
            id:payload.id,
            name:payload.name,
            surname:payload.surname
        }):el)
    }
  }
})

export const { deleteUserR,addUserR,editStatus, editUserR } = dataSlice.actions

export default dataSlice.reducer