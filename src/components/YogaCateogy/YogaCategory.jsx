import React,  { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from 'axios';

const YogaCategory = ({category}) => {

    const [yogaPose, setYogaPose]  = useState([]);

  // console.log(yogaPose);

  useEffect(() => {

    const getDetails = async () => {
      
      const {data} = await axios.get('http://localhost:8000/api/all-yoga-pose');
      // console.log(data);
      setYogaPose(data);
    }

    getDetails();

  }, [])

  return (
    <>
      <div>

       <Container fluid style={{padding:"5%"}}>
            <Row style={{textAlign: "center"}}>

                {yogaPose.map((yoga, index) => {
               if(yoga.category === category){
                return(
                  <Col id={yoga._id} key = {index} xs={6} md={4} lg={3} style={{marginBottom: "2%"}}>
                      <Card className="card-container" onClick={() => window.location.href="/specific-yoga-pose/" + yoga._id}>
                      <Card.Img variant="top" src={yoga.imgUrl} style={{width: "100%", height: 300}}/>
                      <Card.Body>
                          <Card.Title style={{margin: "10 0"}}>{yoga.posename}</Card.Title>
                      </Card.Body>
                      </Card>
                  </Col>
                  )
               }})}
                </Row>
            </Container>

      </div>
    </>
  )
}

export default YogaCategory;
