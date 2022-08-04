import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

const Cards = ({ berita }) => {
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
        <Col key={Math.random().toString()}>
            <Card key={Math.random().toString()} style={{ width: '300px', height: "450px" }}>
                <Card.Img key={Math.random().toString()} variant="top" src={berita.thumbnail} />
                <Card.Body key={Math.random().toString()}>
                    <Card.Title key={Math.random().toString()}>{berita.title}</Card.Title>
                    <Card.Text key={Math.random().toString()}>
                        {berita.description}
                    </Card.Text>
                </Card.Body>
                <Button variant="primary" onClick={getDetail}>Lihat Berita</Button>
            </Card>
        </Col>
    );
}

export default Cards;