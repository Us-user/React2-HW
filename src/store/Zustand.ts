import { create } from 'zustand';


export const dataZustand=create((set)=>({
    dataZ:[
        {
            id:1,
            email:'kvvnsl@gmail.com',
            address:'address1'
        },
        {
            id:2,
            email:'uyrrweiu@gmail.com',
            address:'address2'
        },
    ],
    deleteUserZ: (id)=>set((state)=>({dataZ: state.dataZ.filter(el=>el.id!=id)})),
    addUserZ:(user)=>set((state)=>({dataZ: [...state.dataZ,user]})),
    editUserZ:(user)=>set((state)=>({dataZ: state.dataZ.map((el)=>el.id==user.id ? ({
        id:user.id,
        email:user.email,
        address:user.address
    }):el)}))
}))