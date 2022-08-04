import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';


function CardList({ berita }) {

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
        <div className="container-fluid" style={{ marginLeft: "20px" }}>
            <Card key={Math.random()} border='none' style={{ width: '58rem', height: '10rem' }}>
                <Card.Body>
                    <div className="row">
                        <div className="col-md-4">
                            <Card.Img style={{ width: '300px', height: '130px' }} key={Math.random().toString()} variant="top" src={berita.thumbnail} />
                        </div>
                        <div className="col-md-8">
                            <Card.Text key={Math.random().toString()}>
                                {berita.description}
                            </Card.Text>
                            <Card.Text key={Math.random().toString()} style={{cursor:'pointer', color: 'blue'}} onClick={getDetail}>
                                See More
                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <br />
        </div>
    );
}

export default CardList;