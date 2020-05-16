import React from 'react'
import Planner from '../../components/Planner/Planner.js'
import './style.css'
function PlannerPage () {
        
        return (
          <div className="App">
            <header>
              <div id="logo">
                <span className="icon">date_range</span>
                <span>
                  HUB<b>planner</b>
                </span>
              </div>
            </header>
            <main>
              <Planner />
            </main>
          </div>
        );
      }


export default PlannerPage;