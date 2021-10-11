import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../controllers/UserContext';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../index';
import Auth from './Auth';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UserAvatar} from './Account.styled';

const Account = () => {
    const history = useHistory();
    const { uid, email, username, avatarUrl, setAvatarUrl } = useContext(UserContext);
    const [file, setFile] = useState(null);

    const handleBack = () => {
        history.go(-1);
    }

    const handleFileChange = e => {
        setFile(e.target.files[0]);
    }

    const handleFileUpload = () => {
        const storageRef = ref(storage, `avatars/${uid}/`);
        uploadBytes(storageRef, file)
            .then(snapshot => {
                setFile(null);
                getDownloadURL(snapshot.ref)
                    .then(url => {
                        setAvatarUrl(url);
                    });
            })
    }

    return (
        <Auth>
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
                <Box sx={{display: 'flex',}}>   
                    <UserAvatar 
                        alt="avatar" 
                        src={avatarUrl}
                    />
                </Box>  
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
                    <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        sx={{fontWeight: 300}}
                    >
                        Change avatar: 
                        <input 
                            type="file" 
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                            <Button 
                                variant="outlined" 
                                component="span" 
                                style={{marginLeft: '10px'}} 
                                onClick={handleFileUpload}
                            >
                                Upload
                            </Button>
                    </Typography>
                </Box>
            </Box>
        </Auth>
    );
}
 
export default Account;