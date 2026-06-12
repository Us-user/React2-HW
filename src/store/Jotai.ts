import { atom } from 'jotai';
export const dataAtom=atom([
    {
        id:1,
        age:24,
        job:'teacher'
    },
    {
        id:2,
        age:53,
        job:'bekor'
    }
])

export const deleteItemAtom=atom(null,(get,set,id)=>{
    let data=get(dataAtom)
    set(dataAtom, data.filter(el=>el.id!=id))
})

export const addUserAtom=atom(null,(get,set,user)=>{
    let data=get(dataAtom)
    set(dataAtom, [...data,user])
})

export const editUserAtom=atom(null,(get,set,user)=>{
    let data=get(dataAtom)
    set(dataAtom, data.map((el)=>el.id==user.id ? ({
        id:user.id,
        age:user.age,
        job:user.job
    }):el))
})