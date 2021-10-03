import { useState, useEffect } from 'react';
import { db } from './../index';
import { collection, onSnapshot } from '@firebase/firestore';
import BookCard from './BookCard';

const BookList = () => {
    const [bookCollection, setBookCollection] = useState([]);
    
    useEffect(() => {
        onSnapshot(collection(db, 'books'), snapshot => {
            setBookCollection(snapshot.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            }))
        }, (err) => {
            console.log(err, err.message);
        });
    }, [])

    return (
        <main style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            {bookCollection && 
                bookCollection.map(book => {
                    return <BookCard key={book.id} {...book} />
                })}
        </main>
    );
}

export default BookList;