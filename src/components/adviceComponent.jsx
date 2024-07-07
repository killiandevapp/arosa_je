// import React, { useEffect, useState } from "react";
// // import axiosInstance from '../api/conf';
// import { GetALLCat, PostAdvice } from "../api/conf";
// import { logDOM } from "@testing-library/react";


// export default function Advice() {
//     const [dataCategory, SetDataCategory] = useState({})
//     const [categories, setCategories] = useState([]);
//     const [previewUrl, setPreviewUrl] = useState('');
//     console.log(dataCategory);
//     // const [formData, setFormData] = useState({
//     //     "title": "killian titre 2",
//     //     "description": "Je suis la description 2",
//     //     "like": 15,
//     //     "id_category": 1,



//     //     "picture": null
//     // });
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         like: 0,
//         id_category: '',
//         picture: null
//       });
    


//     // Stocker 

//     useEffect(() => {


//         setCategories([
//             { id: 1, name: 'Catégorie 1' },
//             { id: 2, name: 'Catégorie 2' },
//             { id: 3, name: 'Catégorie 3' },
//           ]);
//         const res = GetALLCat()
//         res.then((el) =>
//             SetDataCategory(el.data)
//         )
//     }, [])




//     const handleChange = (e) => {
//         const { name, value, type } = e.target;
//         setFormData(prevState => ({
//           ...prevState,
//           [name]: type === 'number' ? parseInt(value) : value
//         }));
//       };
    
//       const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setFormData(prevState => ({ ...prevState, picture: file }));
        
//         if (file) {
//           const reader = new FileReader();
//           reader.onloadend = () => {
//             setPreviewUrl(reader.result);
//           };
//           reader.readAsDataURL(file);
//         } else {
//           setPreviewUrl('');
//         }
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         PostAdvice(formData)
//         console.log(formData);
//         // Ici, vous pouvez envoyer les données à votre backend
//       };




//     useEffect(() => {
//         console.log('category succefull !!');
//     }, [dataCategory])
//     console.log(formData);






//     function submitTest() {
//         // const response =  axiosInstance.post('http://localhost:8000/advice/create', formData);
//     }


//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Titre</label>
//                     <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
//                     <textarea
//                         id="description"
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="like" className="block text-gray-700 text-sm font-bold mb-2">Likes</label>
//                     <input
//                         type="number"
//                         id="like"
//                         name="like"
//                         value={formData.like}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="id_category" className="block text-gray-700 text-sm font-bold mb-2">Catégorie</label>
//                     {/* Probleme picture and id_actegory */}
//                     <select
//                         id="id_category"
//                         name="id_category"
//                         value={formData.id_category}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         <option value="">Sélectionnez une catégorie</option>
//                         {categories.map(category => (
//                             <option key={category.id} value={category.id}>
//                                 {category.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="picture" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
//                     <input
//                         type="file"
//                         id="picture"
//                         name="picture"
//                         onChange={handleFileChange}
//                         accept="image/*"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     {previewUrl && (
//                         <div className="mt-4">
//                             <img src={previewUrl} alt="Aperçu" className="max-w-full h-auto rounded-md" />
//                         </div>
//                     )}
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
//                 >
//                     Envoyer
//                 </button>
//             </form>

//             <button onClick={() => { submitTest() }}>Tets</button>

//         </>
//     );
// }

// import React, { useEffect, useState } from "react";
// import { GetALLCat, PostAdvice } from "../api/conf";

// export default function Advice() {
//     const [categories, setCategories] = useState([]);
//     const [previewUrl, setPreviewUrl] = useState('');
//     const [selectedImage, setSelectedImage] = useState(null);


//     console.log(selectedImage);
//     const [formData, setFormData] = useState({
//         title: 'trgr',
//         description: 'rgt',
//         like: 2,
//         id_category: 1,
//         picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=='
//     });

//     console.log(formData.picture);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const res = await GetALLCat();
//                 setCategories(res.data);
//             } catch (error) {
//                 console.error("Error fetching categories:", error);
//             }
//         };

//         fetchCategories();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value, type } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: name === 'id_category' || type === 'number' 
//                 ? parseInt(value, 10) 
//                 : value
//         }));
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setFormData(prevState => ({ ...prevState, picture: file }));
        
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setPreviewUrl(reader.result);
//             };
//             reader.readAsDataURL(file);
//         } else {
//             setPreviewUrl('');
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formDataToSend = new FormData();
        
//         for (const key in formData) {
//             if (key === 'picture' && formData[key] instanceof File) {
//                 formDataToSend.append(key, formData[key], formData[key].name);
//             } else {
//                 formDataToSend.append(key, formData[key]);
//             }
//         }

//         try {
//             const response = await PostAdvice(formData);
//             console.log('gggg');
//             console.log("Advice posted successfully:", response);
//             // Reset form or show success message
//         } catch (error) {
//             console.error("Error posting advice:", error);
//             // Show error message to user
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
//             <div className="mb-4">
//                 <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Titre</label>
//                 <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
//                 <textarea
//                     id="description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label htmlFor="like" className="block text-gray-700 text-sm font-bold mb-2">Likes</label>
//                 <input
//                     type="number"
//                     id="like"
//                     name="like"
//                     value={formData.like}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label htmlFor="id_category" className="block text-gray-700 text-sm font-bold mb-2">Catégorie</label>
//                 <select
//                     id="id_category"
//                     name="id_category"
//                     value={formData.id_category}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                     <option value="">Sélectionnez une catégorie</option>
//                     {categories.map(category => (
//                         <option key={category.id_category} value={category.id_category}>
//                             {category.name}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <div className="mb-4">
//                 <label htmlFor="picture" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
//                 <input
//                     type="file"
//                     id="picture"
//                     name="picture"

//                     accept="image/*"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {previewUrl && (
//                     <div className="mt-4">
//                         <img src={previewUrl} alt="Aperçu" className="max-w-full h-auto rounded-md" />
//                     </div>
//                 )}
//             </div>

//             <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
//             >
//                 Envoyer
//             </button>
//         </form>
//     );
// }

import React, { useEffect, useState } from "react";
import { GetALLCat, PostAdvice } from "../api/conf";

export default function Advice() {
    const [categories, setCategories] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        like: 0,
        id_category: '',
        picture: null
    });

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await GetALLCat();
                setCategories(res.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'number' ? parseInt(value) : value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        
        if (file) {
            setFormData(prevState => ({ ...prevState, picture: file }));
    
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setFormData(prevState => ({ ...prevState, picture: null }));
            setPreviewUrl('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
    
        for (const key in formData) {
            if (key === 'picture' && formData[key] instanceof File) {
                formDataToSend.append(key, formData[key], formData[key].name);
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }
    
        try {
            const response = await PostAdvice(formDataToSend);
            console.log("Conseil envoyé avec succès :", response);
            // Réinitialiser le formulaire ou afficher un message de succès
        } catch (error) {
            console.error("Erreur lors de l'envoi du conseil :", error);
            if (error.response) {
                console.error("Réponse du serveur :", error.response.data);
            }
            // Afficher un message d'erreur à l'utilisateur
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10" encType="multipart/form-data">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Titre</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="like" className="block text-gray-700 text-sm font-bold mb-2">Likes</label>
                <input
                    type="number"
                    id="like"
                    name="like"
                    value={formData.like}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="id_category" className="block text-gray-700 text-sm font-bold mb-2">Catégorie</label>
                <select
                    id="id_category"
                    name="id_category"
                    value={formData.id_category}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Sélectionnez une catégorie</option>
                    {categories.map(category => (
                        <option key={category.id_category} value={category.id_category}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="picture" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                <input
                    type="file"
                    id="picture"
                    name="picture"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {previewUrl && (
                    <div className="mt-4">
                        <img src={previewUrl} alt="Aperçu" className="max-w-full h-auto rounded-md" />
                    </div>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
            >
                Envoyer
            </button>
        </form>
    );
}
