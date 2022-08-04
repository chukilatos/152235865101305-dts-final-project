import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

function CardListItem({ berita }) {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const getDetail = () => {
        if(!user){
            return navigate("/login");
        } else {
         window.open(berita.link);

        }
    }

    return (
        <div className="container-fluid" style={{ marginLeft: "0px", paddingRight: '40px', paddingTop: '20px' }}>
            <Card key={Math.random()} border='none' style={{ width: 'auto', height: '14rem' }}>
                <Card.Body>
                    <Card.Title>{berita.title}</Card.Title>
                    <Card.Text>
                        {berita.description}
                    </Card.Text>
                    <Card.Text key={Math.random().toString()} style={{ cursor: 'pointer', color: 'blue' }} onClick={getDetail}>
                        See More
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardListItem;