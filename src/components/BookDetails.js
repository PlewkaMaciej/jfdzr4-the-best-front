import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams;
    
    return (
        <h2>Book Details - {id}</h2>
    );
}
 
export default BookDetails;