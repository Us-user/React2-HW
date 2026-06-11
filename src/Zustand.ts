import { create } from 'zustand'

export const Data=create((set,get)=>({
    dataZ:[
        {
            id:1,
            email:"email1@gmail.com",
            job:'bekor'
        },
        {
            id:2,
            email:"email2@gmail.com",
            job:'teacher'
        }
    ],
    deleteUserZ:(id)=>set((state)=>({dataZ: state.dataZ.filter((el)=>el.id!=id)})),
    addUserZ:(user)=>set((state)=>({dataZ: [...state.dataZ,user]})),
    editUserZ:(user)=>set((state)=>({dataZ: state.dataZ.map((el)=>el.id==user.id ? user:el)}))

    
}))