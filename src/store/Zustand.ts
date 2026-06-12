import { stat } from 'node:fs/promises';
import { create } from 'zustand';
export const dataZustand=create((set)=>({
    dataZ:[
        {
            id:1,
            email:'email1@gmail.com',
            address:'Sahovat'
        },
        {
            id:2,
            email:'email2@gmail.com',
            address:'Sahovat'
        }
    ],
    deleteUserZ:(id)=>set((state)=>({dataZ: state.dataZ.filter((el)=>el.id!=id)})),
    addUserZ:(user)=>set((state)=>({dataZ: [...state.dataZ,user]})),
    editUserZ:(user)=>set((state)=>({dataZ: state.dataZ.map((el)=>el.id==user.id ? ({
        id:user.id,
        email:user.email,
        address:user.address
    }):el)}))
}))