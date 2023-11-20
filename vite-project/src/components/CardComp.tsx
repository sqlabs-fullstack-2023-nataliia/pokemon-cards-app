import React from "react";
import { Col, Card, Container, Row, Button, CardText, Image, Modal } from "react-bootstrap";

const CardComp = (props: any) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col key={props.item.id} style={{ marginBottom: '20px' }}>
                <Card style={{ width: '20rem', padding: '15px', marginLeft: 'auto', marginRight: 'auto', borderRadius: '2rem', background: '#E6E6FA', opacity: '85%' }}>
                    <Container>
                        <Row style={{ height: '50px' }}>
                            <Col xs={2} style={{ padding: '0px' }}>
                                <Image src={props.item.set.images.symbol} fluid style={{ height: '45px' }} />
                            </Col>
                            <Col style={{ padding: '0px', fontSize: '30px' }}>
                                <Card.Title style={{ fontWeight: 'bold', paddingLeft: '5px' }}>{props.item.name}</Card.Title>
                            </Col>
                            <Col xs={3} style={{ padding: '0px' }}>
                                <Card.Title style={{ fontSize: '30px' }}><span style={{ fontSize: '10px', fontWeight: 'bold' }}>HP</span>{props.item.hp}</Card.Title>
                            </Col>
                        </Row>
                    </Container>
                    <div style={{ textTransform: 'uppercase', fontWeight: 'bold', background: '#483D8B', width: 'auto', borderRadius: '7px', textAlign: 'center', color: 'white', opacity: '85%' }}>{props.item.subtypes}</div>
                    <Col style={{ width: '18rem', overflow: 'hidden', border: '5px solid #4682B4', borderRadius: '1rem' }}>
                        <Col xs={6} style={{ width: '350px', height: '150px', overflow: 'hidden' }}>
                            <Image src={props.item.images.large} fluid style={{ position: 'relative', top: '-57px', left: '-25px' }} />
                        </Col>
                    </Col>


                    <Card.Body style={{ borderRadius: '25px', background: '#FFF0F5' }}>
                        <Col>
                            <Image src={props.item.set.images.logo} fluid style={{ height: '45px', position: 'relative', top: '-50px' }} />
                        </Col>
                        <Row>
                            <Col xs={9}><Card.Title style={{ fontWeight: 'bold', fontSize: 25 }}>{props.item.attacks ? props.item.attacks[0].name : ""}</Card.Title></Col>
                            <Col xs={3}><Card.Title style={{ borderRadius: '25rem', background: '#6A5ACD', color: 'white', width: '35px', height: '25px', opacity: '90%' }}>{props.item.attacks ? (props.item.attacks[0].damage === "" ? "0+" : props.item.attacks[0].damage) : ""}</Card.Title></Col>
                        </Row>

                        <Card.Text style={{ height: '100px' }}>
                            {!props.item.flavorText ? <>{`Supertype: ${props.item.supertype}`}<br />{`Evolves Form: ${props.item.evolvesFrom}`}</> : props.item.flavorText}
                        </Card.Text>


                        <div className="d-grid gap-2">
                            <Button variant="success" onClick={handleShow} size='lg'>Show Card</Button>
                        </div>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body>
                                <Image src={props.item.images.large} fluid />
                            </Modal.Body>
                        </Modal>


                        <CardText style={{ position: 'relative', top: '20px', fontWeight: 'bold', fontSize: '20px' }}>{props.item.set.ptcgoCode} <span style={{ fontWeight: 'normal', fontSize: '15px' }}>{props.item.set.releaseDate}</span></CardText>
                    </Card.Body>
                </Card>

            </Col>
        </>
    )
}

export default CardComp;