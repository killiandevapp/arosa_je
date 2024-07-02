import React, { useEffect, useState } from 'react'



export default function ProfilDetaille() {
    const [disableUpdate, setDisableUpdate] = useState(false)

    const [ getData, setData ] = useState({
        fullName: '',
        email: '',
        address: '',
        zip: '',
        phone: '',
        city: '',
        role: '',
        message: ''

    })



    useEffect(() => {
        const getDetaille = localStorage.getItem('user_info')
        console.log(getDetaille.name);

        const parsedInfo = JSON.parse(getDetaille);
        console.log(parsedInfo.zip);
        if (getDetaille) {
            setData(prevData => ({
                ...prevData,
                fullName: parsedInfo.name,
                email: parsedInfo.email ,
                address: parsedInfo.address ,
                zip: parsedInfo.zip ,
                phone: parsedInfo.phone ,
                city: parsedInfo.city ,
                role: parsedInfo.role 
              }));
        }
    }, [])


    function fcUpdtateProfil(){
        
    }


        console.log(getData);
    return (
        <>

            <div>
             <h2 className='font-semibold text-lg mb-[15px]	mt-[15px]'>{getData.fullName}</h2>
             <div>
                <p><span className='font-medium'>Numéro de téléphone : </span>
                <input className='bg-white' type='text' disabled={disableUpdate} defaultValue={getData.phone}/>
                </p>
                <p><span className='font-medium'>Code zip : </span>{getData.zip}</p>
                <p><span className='font-medium'>Email : </span> {getData.email}</p>
                <p><span className='font-medium'>Address : </span> {getData.address}</p>
                <p><span className='font-medium'>Ville : </span> {getData.city}</p>
                <p><span className='font-medium'>Utilisateur : </span>{getData.role}</p>
             </div>
              <button className='bg-[#5AD058] p-3 rounded-lg text-base mt-[15px] font-semibold text-white'
              onClick={()=> fcUpdtateProfil()}>
              Modifier profil
              </button>

            </div>
        </>
    )
}