import React from "react";
import dateFns from "date-fns";

class CalendarTwo extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
      };
    
      renderHeader() {
        const dateFormat = "MMMM YYYY";
        return (
          <div className="header row flex-middle">
            <div className="col col-start">
              <div className="icon" onClick={this.prevMonth}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
              <span>
                {dateFns.format(this.state.currentMonth, dateFormat)}
              </span>
            </div>
            <div className="col col-end" onClick={this.nextMonth}>
              <div className="icon">chevron_right</div>
            </div>
          </div>
        );
      }
      renderDays() {
        const dateFormat = "dddd";
        const days = [];
        let startDate = dateFns.startOfWeek(this.state.currentMonth);
        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col col-center" key={i}>
              {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </div>
          );
        }
        return <div className="days row">{days}</div>;
      }
      renderCells() {}
      onDateClick = day => {};
      nextMonth = () => {
        this.setState({
          currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
      };
      prevMonth = () => {
        this.setState({
          currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
      };
  render() {
    return (
      <div className="calender">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default CalendarTwo;