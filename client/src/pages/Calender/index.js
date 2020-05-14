import React from 'react'
import CalendarTwo from '../../components/calender/calender.jsx'
class Calendar extends React.Component(){

    render() {
        return (
          <div className="App">
            <header>
              <div id="logo">
                <span className="icon">date_range</span>
                <span>
                  react<b>calendar</b>
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