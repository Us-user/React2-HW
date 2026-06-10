import { createSlice } from './../../node_modules/@reduxjs/toolkit/src/createSlice';

export interface IData{
    id:number,
    name:string
}

export interface ToDOState{
    data: IData[]
}

const initialState:ToDOState={
    data:[
        {
            id:1,
            name:'John'
        },
        {
            id:2,
            name:'Smith'
        }
    ]
}

const dataSlice=createSlice({
    name:'dataSlice',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.data.push(action.payload)
        },
        deleteUser:(state,{payload})=>{
            state.data=state.data.filter(el=>el.id!=payload)
        },
        editUser:(state,{payload})=>{
            state.data=state.data.map(el=>el.id==payload.id ? ({id:payload.id, name:payload.name}):el)
        }
    }
})

export const { addUser, deleteUser, editUser } = dataSlice.actions

export default dataSlice.reducer