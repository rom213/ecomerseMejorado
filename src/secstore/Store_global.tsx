
import create from 'zustand'
import { Carshop } from '../interfases/cart'
import { ecomerApi } from '../api/ecomerApi'


interface initialstate{
    carshopp:Carshop[],
    ThunkCarshop:()=>Promise<void>
}


export const Globalstore=create<initialstate>((set)=>({
//Prooductos Disponibles

//Carrito de Compras
carshopp:[],
ThunkCarshop:async ()=>{
    ecomerApi.get(`/cart`)
        .then(res=>{
            const data:Carshop[]=res.data
            set(()=>({
                carshopp:data
            }))
        })
},
purshases:[],





}))