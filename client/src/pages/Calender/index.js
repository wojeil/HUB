import React from 'react'
import CalendarTwo from '../../components/calender/calender.js'
import './calendar.css'
class Calendar extends React.Component{
        render() {
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
              <CalendarTwo />
            </main>
          </div>
        );
      }

}

export default Calendar;