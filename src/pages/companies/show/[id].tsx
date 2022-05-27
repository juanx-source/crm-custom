import {
    Button, Col, Container, Form, Row, Card, InputGroup, FormControl,
    ButtonGroup, ToggleButton, Nav, Tabs, Tab, DropdownButton, Dropdown
} from "react-bootstrap";
import { useRouter } from 'next/router'
import { CaseDetailModel } from ".../../models/Case";
import getCompanyData from "services/companyService";
import Overview from "components/_common/overview";
import Overview2 from "components/_common/overview2";

const page = "cases";

export default function Show() {


    const id = 3
    // let data = cases

    let dataCompany: any = getCompanyData(id)

    let dataIdCase = {
        id: id,
        view: 'companyId'
    }

    

    return (
        <>

            {/* <Container className="shadow-sm p-3 mb-3 bg-white rounded mt-2">
                <Row style={{marginTop: '50px'}}>
                    <Col sm={1} style={{width: '30px'}} >
                        <h4>
                            ←
                        </h4>
                    </Col>
                    <Col sm={1}>
                        <img src="/compayIcon.png" style={{ height: '55px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <h4> {data.name} </h4>
                        </Row>
                        <Row>
                            <h6>Add tags</h6>
                        </Row>
                    </Col>
                    <Col align="end">
                        <Button variant="secondary">Editar</Button>{' '}
                        <Button variant="secondary">...</Button>{' '}
                        «
                        »
                    </Col>
                </Row>
            </Container> */}

            <Container className="shadow-sm p-3 mb-3 bg-white rounded mt-2">
            <Row style={{ marginTop: '50px', display: 'flex', alignItems: 'start', height: '30px' }}>
                    <Col sm={1} style={{ width: '50px'}}>
                        <img src="/backIcon.png" alt="Atrás" height="20" onClick={() => { window.history.back() }} />
                    </Col>
                    
                    <Col  sm={1} style={{ width: '70px'}}>
                        <img src="/compayIcon.png" style={{ height: '40px' }} />
                    </Col>
                    <Col sm={8} style={{ marginRight: 'auto'}}>

                            <h4>{dataCompany.name}</h4>

                    </Col>
                    <Col sm={2} style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'flex-end' }} align='end'>
                        <Row align='end' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Col > <Button variant="secondary" style={{background: '#FFF', color: 'black' }}>Edit</Button>{' '}</Col>
                            <Col>
                                <DropdownButton variant="secondary"align="end" id="dropdown-basic-button" title="..." style={{background: '#FFF', color: 'black' }}>
                                    <Dropdown.Item href="#/action-1">Clonar</Dropdown.Item>
                                    <Dropdown.Item>Eliminar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>{" "}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container style={{ display: 'block' }}>
                <Row>
                <Col sm={2}>
                        <b>Lista relacionada</b>
                        <Col>
                            <div><a href="#cases" style={{ textDecoration: 'none' }}>Casos</a></div>
                            {/* <div><p>Enlaces</p></div> */}
                        </Col>
                        {/* <p className="text-primary">Add link</p> */}
                    </Col>

                    <Col style={{
                        backgroundColor: '#edf0f4'
                    }}>
                        <Row>
                            <Row sm={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#edf0f4' }}>

                                <Col sm={4} style={{ width: 'auto' }}>

                                    <Button variant="primary">Visión general</Button>
                                    {/* 
                                    <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="flex-row" variant="pills">
                                        <Tab eventKey="overview" title="Overview">
                                            <Overview />
                                        </Tab>
                                        <Tab eventKey="timeline" title="Timeline">
                                            <Timeline />
                                        </Tab>
                                    </Tabs> */}
                                </Col>
                            </Row>

                            <Row style={{
                                maxHeight: "25rem", overflow: "auto", backgroundColor: '#edf0f4'
                            }}>
                                <Overview2 page={page} id={id} dataIdCase={dataIdCase} dataCompany={dataCompany}/>
                            </Row>



                        </Row>
                    </Col>
                </Row>
            </Container>


        </>
    )
}