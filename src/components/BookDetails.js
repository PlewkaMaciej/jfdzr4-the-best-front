import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../index';

const BookDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const docRef = doc(db, 'books', id);
        getDoc(docRef)
            .then(docSnap => {
                if (docSnap.exists()) {
                    console.log(docSnap.data());
                }
                setData(docSnap.data());
            })
    }, [id]);
    
    return (
        <h2 style={{marginTop: '10%'}}>{ data && data.title}</h2>
    );
}
 
export default BookDetails;