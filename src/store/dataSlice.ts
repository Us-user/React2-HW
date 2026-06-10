import { createSlice } from '@reduxjs/toolkit'

export interface data{
    id: number,
    name: string,
    job: string,
    status: boolean
}

export interface state{
    data: data[]

}

const initialState:state={
    data:[
        {
            id:1,
            name:"umar",
            job:'bekor',
            status:true
        },
        {
            id:2,
            name:'muhammad',
            job:'bakor',
            status:false
        }
    ],

}


export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    deleteUser:(state,{payload})=>{
        state.data=state.data.filter((el)=>el.id!=payload)
    },
    addUser:(state,{payload})=>{
        state.data.push(payload)
    },
    editUser:(state,{payload})=>{
        state.data=state.data.map((el)=>el.id==payload.id ? ({...el,name:payload.name,job:payload.job}):el)
    },
    editUserStatus:(state,{payload})=>{
        state.data=state.data.map((el)=>el.id==payload ? ({...el,status:!el.status}):el)
    },
    search:(state,{payload})=>{
        state.data=payload.trim().length!=0 ? state.data.filter(el=>el.name.toLowerCase().includes(payload.trim().toLowerCase())) : state.data
    }
  }
})

export const { deleteUser, addUser, editUser, editUserStatus, search } = dataSlice.actions

export default dataSlice.reducer