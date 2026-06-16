import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'


interface IDataItem {
    name: string
}

interface IData {
    data: IDataItem[],
    isLoading: boolean,
    isError: boolean
}

const initialState: IData = {
    data: [],
    isLoading: false,
    isError: false
}

const api = 'https://to-dos-api.softclub.tj/api/to-dos'

export const getData = createAsyncThunk('dataSlice/getData', async () => {
    try {
        let { data } = await axios.get(api)
        return data.data
    } catch (error) {
        console.log(error);
    }
})

export const deleteData=createAsyncThunk('dataSlice/deleteData', async(id)=>{
    try {
        await axios.delete(`${api}?id=${id}`)
    } catch (error) {
        console.log(error);
    }
})

export const dataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    redusers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getData.pending, (state, { payload }) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(getData.fulfilled,(state,{payload})=>{
                state.isLoading=false
                state.isError=false
                state.data=payload
            })
            .addCase(getData.rejected, (state,{payload})=>{
                state.isLoading=false
                state.isError=true
            })
    }
})



export const { } = dataSlice.actions

export default dataSlice.reducer