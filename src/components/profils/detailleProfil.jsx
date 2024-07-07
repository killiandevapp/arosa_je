import React, { useEffect, useState } from 'react'
import { PostUpdatePorfil } from '../../api/conf'



export default function ProfilDetaille() {
    const [disableUpdate, setDisableUpdate] = useState(true)

    const [getData, setData] = useState({
        fullname: '',
        email: '',
        address: '',
        zip: '',
        phone: '',
        city: ''

    })



    useEffect(() => {
        const getDetaille = localStorage.getItem('user_info')
       

        const parsedInfo = JSON.parse(getDetaille);

        if (getDetaille) {
            setData(prevData => ({
                ...prevData,
                fullname: parsedInfo.name,
                email: parsedInfo.email,
                address: parsedInfo.address,
                zip: parsedInfo.zip,
                phone: parsedInfo.phone,
                city: parsedInfo.city
            }));
        }
    }, [])


    function fcUpdtateProfil() {
        setDisableUpdate(!disableUpdate)
        console.log(getData);

    }


    function saveUpdate() {
        console.log(getData)
        PostUpdatePorfil(getData)
    }




    console.log(getData);
    return (
        <>

            <div>

                <div>
                    <input className='bg-white font-semibold text-lg mb-[15px]	mt-[15px]' type='text' disabled={disableUpdate} defaultValue={getData.fullname}
                        onChange={(e) => { setData(prevData => ({ ...prevData, fullname: e.target.value })); }} />
                </div>
                <div>
                    <div><span className='font-medium'>Numéro de téléphone : </span>
                        <input className='bg-white' type='text' disabled={disableUpdate} defaultValue={getData.phone}
                            onChange={(e) => { setData(prevData => ({ ...prevData, phone: e.target.value })); }}
                        />
                    </div>
                    <div>
                        <span className='font-medium'>Code zip : </span>
                        <input className='bg-white' type='text' disabled={disableUpdate} defaultValue={getData.zip}
                            onChange={(e) => { setData(prevData => ({ ...prevData, zip: e.target.value })); }}

                        />

                    </div>
                    <div>
                        <span className='font-medium'>Email : </span>
                        <input className='bg-white' type='text' disabled={disableUpdate} defaultValue={getData.email}
                            onChange={(e) => { setData(prevData => ({ ...prevData, email: e.target.value })); }}
                        />

                    </div>
                    <div>
                        <span className='font-medium'>Address : </span>
                        <input className='bg-white' type='text' disabled={disableUpdate} defaultValue={getData.address}
                            onChange={(e) => { setData(prevData => ({ ...prevData, address: e.target.value })); }}
                        />

                    </div>
                    <div>
                        <span className='font-medium'>Ville : </span>
                        <input className='bg-white' type='text' disabled={disableUpdate} defaultValue={getData.city}
                            onChange={(e) => {
                                setData(prevData => ({ ...prevData, city: e.target.value }));
                            }} />

                    </div>
                    <p><span className='font-medium'>Utilisateur : </span></p>
                </div>
                <div className='grid grid-cols-2	'>
                    <div className='flex justify-center'>
                        <button className='p-[15px] mb-[35px] bg-xhite w-2/6 p-5 border-2 shadow-xl rounded-lg text-base mt-[15px] font-semibold text-[#5AD058] cursor-pointe'
                            onClick={() => fcUpdtateProfil()}>
                            Modifier profil
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        {!disableUpdate ? (
                            <input type='button' value='enregister' className='p-[15px] mb-[35px] bg-xhite w-1/6 p-5 border-2 shadow-xl rounded-lg text-base mt-[15px] font-semibold text-[#5AD058] cursor-pointe' onClick={() => { saveUpdate() }} />
                        ) : null}

                    </div>

                </div>


            </div>
        </>
    )
}