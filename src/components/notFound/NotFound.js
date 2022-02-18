import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Sorry...</h2>
            <p>This page could not be found! Return home by clicking → <Link to='/'>HERE</Link></p>
        </div>
    );
}
 
export default NotFound;