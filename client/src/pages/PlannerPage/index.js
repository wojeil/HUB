import React from 'react'
import Planner from '../../components/Planner/index.js'
import './style.css'
import {Container,Row,Col} from "../../components/Grid"
import Calendar from '../../components/Calendar'
function PlannerPage () {
        
        return (
          <Container fluid>
          
            <header>
              <div id="logo">
                <span className="icon">date_range</span>
                <span>
                  HUB<b>planner</b>
                </span>
              </div>
            </header>
            <hr/>
            <Calendar/>
             <hr/>
            <Row>
              <Col size="sm-12">
              <Planner/>
              </Col>
            </Row>
          
          </Container>
        );
      }


export default PlannerPage;