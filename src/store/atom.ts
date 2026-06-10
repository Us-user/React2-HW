import {atom} from 'jotai'

export const dataAtom=atom([
    {
        id:1,
        name:'Name1'
    },
    {
        id:2,
        name:'Name2'
    }
])

export const deleteItemDataAtom=atom(null,(get,set,id)=>{
    set(dataAtom, get(dataAtom).filter((el)=>el.id!=id))
})