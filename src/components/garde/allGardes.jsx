import React, { useEffect, useState } from 'react'
import { GetALLCare } from '../../api/conf'
import { UpdtaCare } from '../../api/conf'


export default function GardeAll() {

    const [dataCare, setDataCare] = useState()
    const [dataCareUpdate, setDataCareUpdate] = useState({
        "active": 1,
        "keeper": '',
    })
    const [id_user, setIduser] = useState()


    useEffect(() => {

        const userInfoString = localStorage.getItem('user_info')
        const userInfo = JSON.parse(userInfoString);
        const idd = userInfo.id;
        setDataCareUpdate({ ...dataCareUpdate, keeper: idd })
        setIduser(idd)
        const res = GetALLCare()
        res.then((item) => {
            console.log(item);
            setDataCare(item.data.cares)
        })

    }, [])

      function  addNewGarde(){
        const res =  UpdtaCare(id_user)
    }


    return (
        <>

            <h1>Voicie les p^roposition dez garde : </h1>


            {dataCare ? (

                dataCare.map((el) =>

                    <div onClick={()=> addNewGarde()} className='bg-red-200 m-[100px] cursor-pointer'>
                        <p>Titre {el.title}</p>

                    </div>

                )



            ) : null}


        </>
    )
}