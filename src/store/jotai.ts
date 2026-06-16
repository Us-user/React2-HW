import {atom} from "jotai"
import axios from "axios"
import {atomWithRefresh, loadable} from "jotai/utils"

const api='https://to-dos-api.softclub.tj/api/to-dos'


export const getDataAtom = atomWithRefresh(async(get)=>{
    try {
        let {data}=await axios.get(api)
        return data.data
    } catch (error) {
        console.log(error);
    }
})

export const getLoadableAtom=loadable(getDataAtom)

export const deleteDataItem=atom(null,async(get,set,id)=>{
    try {
        await axios.delete(`${api}?id=${id}`)
        set(getDataAtom)
    } catch (error) {
        console.log(error);
    }

})