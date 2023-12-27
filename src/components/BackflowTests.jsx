import { React } from 'react';
import { Card } from 'react-bootstrap';
import '../styles/CardComponent.css';
import { Link } from 'react-router-dom';

const BackFlowTester = "https://ik.imagekit.io/greenviewsolutions/HomePage/FullSizedWebp/Backflow_Testing_Device.webp?tr=w-600,h-600";

const BackflowTests = (props) => {
    return(
        <div className="divBox">  
            <Card.Img variant="custom" src={BackFlowTester} className='cardImage' alt="Backflow testing equipment"/>
            <Card.Body className='cardBody'>
                <Card.Title><h1 id="CardTitles">Backflow Tests</h1></Card.Title>
                <Card.Text>
                    Commercial or residential, we cover all backflow testing needs. Certified from APPB. 
                </Card.Text>
                <Link to="/fencing" >
                    <button className='cardButton'>Backflow Tests</button>{' '}
                </Link>            
            </Card.Body>
        </div>
    )
}

export default BackflowTests;
