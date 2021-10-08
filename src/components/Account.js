import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../controllers/UserContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../index';
import Spinner from './Spinner';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Typography from '@mui/material/Typography';

const Account = () => {
    const history = useHistory();
    const { uid, email } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const handleBack = () => {
        history.go(-1);
    }

    useEffect(() => {
        const q = query(collection(db, 'users'), where('id', '==', uid));
        getDocs(q)
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const { username, avatar } = doc.data();
                    setUsername(username);
                    if (avatar === 'default-avatar.png') {
                        getDownloadURL(ref(storage, `avatars/${avatar}`))
                            .then(url => {
                                setImgUrl(url);
                            })
                    } else {
                        getDownloadURL(ref(storage, `avatars/${uid}/${avatar}`))
                            .then(url => {
                                setImgUrl(url);
                            })
                    }
                })
            })
    }, [uid]);

    return (
            <Box 
                sx={{
                    maxWidth: '1000px',
                    m: "0 auto",
                    p: '2rem',
                    display: 'flex',
                    justifyContent: 'space-around',
                    borderRadius: '15px',
                    boxShadow: '0 0 10px rgba(0,0,0, .1)'
                }}
            >
                {
                    imgUrl !== '' 
                    ?   <Box sx={{
                            display: 'flex',
                            width: '300px',
                            height: '300px',
                            backgroundColor: '#fff'
                            }}
                    >   
                            <CardMedia
                            component="img"
                            height="100%"
                            width="100%"
                            image={imgUrl}
                            alt="user avatar"
                            sx={{alignSelf: 'center', borderRadius: '50%'}}
                            />
                        </Box>
                    :   <Box sx={{
                            height: 300,
                            width: 300,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            borderRadius: '50%'
                            }}
                    >
                            <Spinner />
                    </Box>  
                }
                <Box 
                    sx={{
                        padding: '0 2rem 0 2.5rem',
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start' 
                    }}
                >
                        <Fab
                            onClick={handleBack}
                            variant="extended"
                            color="primary"
                            aria-label="go back"
                            sx={{
                                alignSelf: 'flex-end',
                                mb:3,
                                fontSize: '.8rem',
                                lineHeight: 2
                            }} 
                        >
                            <ArrowBackOutlinedIcon sx={{mr:1, fontSize: '1.3rem'}} />
                            back
                        </Fab>
                    <Typography
                        variant="h4"
                        component="div"
                        gutterBottom
                    >
                        Account Details
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        sx={{fontWeight: 300}}
                    >
                        Username: { username }
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        sx={{fontWeight: 300}}
                    >
                        Email: { email }
                    </Typography>
                </Box>
            </Box>
    );
}
 
export default Account;