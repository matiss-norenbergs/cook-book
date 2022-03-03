import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";

const useFetch = (folder, item) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(item){
            const unsub = onSnapshot(doc(db, folder, item), (doc) => {
                if(doc.data()){
                    setData(doc.data());
                    setIsPending(false);
                    setError(null);
                }else{
                    setIsPending(false);
                    setError("Could not fetch the data from the server"); 
                }
            },
            (error) => {
                setIsPending(false);
                setError(error);
            });
            
            return unsub;
        }else{
            const q = query(collection(db, folder), orderBy("timeStamp", "asc"));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                setData(snapshot.docs.map((doc => ({...doc.data(), id: doc.id}))));
                if(snapshot.docs.length > 0){
                    setIsPending(false);
                    setError(null);
                }else{
                    setIsPending(false);
                    setError("Could not fetch the data from the server");
                }
            },
            (error) => {
                setIsPending(false);
                setError(error);
            });
            
            return unsubscribe;
        }
    }, []);

    return { data, isPending, error }
}

export default useFetch;