import React from "react";
import dateFns from "date-fns";

class CalendarTwo extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
      };
    
      renderHeader() {}
      renderDays() {}
      renderCells() {}
      onDateClick = day => {};
      nextMonth = () => {};
      prevMonth = () => {};
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