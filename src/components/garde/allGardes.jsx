import React, { useEffect, useState } from 'react'
import { GetALLCare } from '../../api/conf'
import { UpdtaCare } from '../../api/conf'
import MessageError from '../error/messageError'
import ImgMessageErroor from '../../images/florIconeError.png'

import moment from 'moment'
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
            .then(res => res?.data?.cares && res?.data?.cares.length > 0 ? setDataCare(res.data.cares) : console.log('Données invalides'))
            .catch(error => console.error('Erreur:', error));
    }, []);

    function addNewGarde(id) {
        const res = UpdtaCare(id)
    }
    console.log(dataCare);


    return (
        <>
            <section className='w-full h-[100vh] bg-zinc-100 '>
                <h1 className='p-[15px] font-bold text-2xl'>Voicie les propositions <span className=' text-[#5AD058]'>des gardes</span> </h1>
                <div className={` ${dataCare ? ('grid grid-cols-[33%_33%_33%] ') : 'flex h-3/4 '}  mt-[50px] mx-[50px]`}>
                    {dataCare ? (
                        dataCare.map((el, index) =>
                            <div className='h-full w-full flex justify-center items-center'>
                                <div className='relative rounded-lg shadow-xl h-[90%] w-[90%] bg-white p-[15px] '>
                                    <p className='abolute  text-[##20891e]'>N°{index + 1}</p>
                                    <p className='text-center font-semibold text-xl mb-[20px]  '>Titre {el.title}</p>
                                    <p className='mx-[15px]'>{el.description}</p>
                                    <div>
                                        <p className='mx-[15px]'>Commence le : <span className='font-semibold'>{moment(el.started_at).format('DD/MM/YYYY')}</span></p>
                                        {/* <img src=''/> */}
                                        <p className='mx-[15px]'>Fini le : <span className='font-semibold'>{moment(el.ended_at).format('DD/MM/YYYY')}</span></p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button onClick={() => addNewGarde(el.id)} className='p-[5px] mb-[35px] bg-xhite w-1/2 p-3 border-2 shadow-xl rounded-lg text-base mt-[15px] font-semibold text-[#5AD058] cursor-pointer'>Garder</button>

                                    </div>
                                </div>
                            </div>
                        )
                    ) :
                        <div className='flex'>
                            <div>
                                <img className='h-[250px]' src={ImgMessageErroor} alt="" srcset="" />
                            </div>
                            <div >
                                <p className='mt-[150px]'><span className='font-semibold'>Nombre de garde attribuer inexistante .</span> Il faut etre <a href='/connexion' className='text-[#5AD058] font-bold'> connecter</a> pour visionner les gardes.</p>
                            </div>

                        </div>
                    }
                </div>
            </section>
        </>
    )
}