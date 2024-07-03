import React, { useState } from "react";



export default function GardeBotaniste() {
    // Trigger Garde
    const [triggerGarde, setTriggerGarde] = useState(false)




    return (
        <>

            <div>
                <div className="grid grid-cols-2 w-full">
                    <div className="flex justify-center">
                        <input value='Garde' type="button" className="bg-[#5AD058] w-1/3 p-3 rounded-lg text-base mt-[15px] font-semibold text-white cursor-pointer"
                            onClick={() => { setTriggerGarde(true) }}
                        />

                    </div>
                    <div className="flex justify-center">
                        <input value='Historique' type="button" className="bg-[#5AD058] w-1/3 p-3 rounded-lg text-base mt-[15px] font-semibold text-white cursor-pointer"
                            onClick={() => { setTriggerGarde(false) }}
                        />
                    </div>

                </div>
                <div>
                    {triggerGarde ? (
                        <p>Surveillance de garde</p>

                    ) : (

                        <>

                            <p>Historique Garde </p>
                            <div>     </div>

                        </>



                    )}

                </div>
            </div>
        </>
    );
}