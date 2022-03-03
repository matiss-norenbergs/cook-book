import { collection, doc, getDoc, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";

const useFetch = (folder, item) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    const getRecipes = async () => {
        const recipesCollection = collection(db, folder);

        try{
            const data = await getDocs(recipesCollection);

            if(data){
                setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
                setIsPending(false);
                setError(null);
            }else{
                setIsPending(false);
                setError('Could not fetch the data from the server');
            }
        }catch (err){
            setIsPending(false);
            setError(err.message);
        }
    }

    const getRecipe = async () => {
        try{
            const docRef = doc(db, folder, item);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                setData(docSnap.data());
                setIsPending(false);
                setError(null);
            } else {
                setIsPending(false);
                setError("Could not fetch the data from the server");
            }
        }catch (err){
            setIsPending(false);
            setError(err.message);
        }
    }

    useEffect(() => {
        item ? getRecipe() : getRecipes()

        return () => {
            console.log("Cleanup!")
        }
    }, []);

    return { data, isPending, error }
}

export default useFetch;

// useEffect(() => {
//     const abortCont = new AbortController();
    
//     fetch(url, { signal: abortCont.signal })
//     .then(res => {
//         if(!res.ok){
//             throw Error('Could not fetch the data from the server')
//         }
//         return res.json();
//     })
//     .then(data => {
//         setData(data);
//         setIsPending(false);
//         setError(null);
//     })
//     .catch(err => {
//         if(err.name === 'AbortError'){
//             console.log('Fetch aborted.');
//         }else{
//             setIsPending(false);
//             setError(err.message);
//         }
//     })

//     return () => abortCont.abort();
// }, [url]);




//----------------------------------------------------------------------------------

// const useFetch = (item) => {
//     const [data, setData] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const recipesCollection = collection(db, "recipes");
//         const getRecipes = async () => {
//             try{
//                 const data = await getDocs(recipesCollection);

//                 if(data){
//                     setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
//                     setIsPending(false);
//                     setError(null);
//                 }else{
//                     setIsPending(false);
//                     setError('Could not fetch the data from the server');
//                 }
//             }catch (err){
//                 setIsPending(false);
//                 setError(err.message);
//             }
//         }

//         const getRecipe = async () => {
//             try{
//                 const docRef = doc(db, "recipes", item);
//                 const docSnap = await getDoc(docRef);

//                 if(docSnap.exists()){
//                     setData(docSnap.data());
//                     setIsPending(false);
//                     setError(null);
//                 } else {
//                     setIsPending(false);
//                     setError("Something went wrong!");
//                 }
//             }catch (err){
//                 setIsPending(false);
//                 setError(err.message);
//             }
//         }

//         if(item){
//             getRecipe();
//         }else{
//             getRecipes();
//         }

//         return () => getRecipes();
//     }, []);
    
//     return { data, isPending, error }
// }
