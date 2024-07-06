import React, { useEffect, useState } from 'react'
import { GetALLCare } from '../../api/conf'
import { UpdtaCare } from '../../api/conf'
import MessageError from '../error/messageError'


export default function GardeAll() {

    const [dataCare, setDataCare] = useState()
    const [dataCareUpdate, setDataCareUpdate] = useState({
        "active": 1,
        "keeper": '',
    })
    const [id_user, setIduser] = useState()


    // useEffect(() => {

    //     const userInfoString = localStorage.getItem('user_info')
    //     const userInfo = JSON.parse(userInfoString);
    //     const idd = userInfo.id;
    //     // setDataCareUpdate({ ...dataCareUpdate, keeper: idd })
    //     setIduser(idd)
    //     const res = GetALLCare()
    //     console.log(res);
    //     res.then((item) => {
    //         console.log(item);
    //         setDataCare(item.data.cares)
    //     })

    // }, [])





    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user_info') || '{}');
        const idd = userInfo.id;
        if (!idd) {
          console.error('ID utilisateur non trouvé');
          return;
        }
      
        setIduser(idd);
      
        GetALLCare()
          .then(res => res?.data?.cares ? setDataCare(res.data.cares) : console.log('Données invalides'))
          .catch(error => console.error('Erreur:', error));
      }, []);

      function  addNewGarde(id){
        const res =  UpdtaCare(id)
    }


    return (
        <>
       

            <h1 className='p-[15px] font-bold text-2xl'>Voicie les propositions <span className=' text-[#5AD058]'>des gardes</span> </h1>


            {dataCare ? (

                dataCare.map((el) =>

                    <div onClick={()=> addNewGarde(el.id)} className='bg-grey-200 m-[100px] cursor-pointer'>
                        <p>Titre {el.title}</p>

                    </div>

                )



            ) : <p>Pas de gardes Disponible.</p>}


        </>
    )
}