import { atom } from 'jotai';

export const dataAtom=atom([
    {
        id:1,
        phone:918242354,
        adress:'softclub'
    },
    {
        id:2,
        phone:931783300,
        adress:'profsouz'
    }
])

export const deleteUserAtom=atom(null,(get,set,id)=>{
    const data=get(dataAtom)
    set(dataAtom, data.filter((el)=>el.id!=id))
})

export const addUserAtom=atom(null,(get,set,user)=>{
    const data=get(dataAtom)
    set(dataAtom, [...data,user])
})

export const editUserAtom=atom(null,(get,set,user)=>{
    const data=get(dataAtom)
    set(dataAtom, data.map((el)=>el.id==user.id ? user:el))
})