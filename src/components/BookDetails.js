import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../index';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

const BookDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        const docRef = doc(db, 'books', id);
        getDoc(docRef)
            .then(docSnap => {
                setData(docSnap.data());
                const { coverName } = docSnap.data();
                getDownloadURL(ref(storage, `covers/${id}/${coverName}`))
                    .then(url => {
                        setImgUrl(url);
                    })
            })
            .catch(err => {
                console.log(err, err.message);
            });
        }, [id]);

    return (
        <>
        {data &&
        <Box sx={{ display: 'flex', justifyContent: 'space-between', m: "10% auto", p: '2%', background: '#efefef', borderRadius: '15px', maxWidth: '900px' }}>
            <CardMedia
                component="img"
                height="330"
                width="300"
                image={imgUrl}
                alt={data.title}
                sx={{alignSelf: 'center'}}
            />
            <Box sx={{m: 1}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: 10}}>
                <h2>{data.title}</h2>
                <p>back</p>
                </Box>
                <h4>{data.author}</h4>
                <h5>Published: {data.published}</h5>
                <p>{data.description}</p>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', pr: 10}}>
                    <p>Price: {data.price.toFixed(2)} zł</p>
                    <p>Add to basket</p>
                </Box>
            </Box>
        </Box>}
        </>
    );
}
 
export default BookDetails;