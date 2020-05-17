import React from "react";
import PlannerForm from "../PlannerForm"

// import addMonths from 'date-fns/addMonths';
// import subMonths from 'date-fns/subMonths';
// import addDays from 'date-fns/addDays';
// import startOfWeek from 'date-fns/startOfWeek';
// import endOfWeek from 'date-fns/endOfWeek';
// import startOfMonth from 'date-fns/startOfMonth';
// import endOfMonth from 'date-fns/endOfMonth';
// import isSameMonth from 'date-fns/isSameMonth';
// import isSameDay from 'date-fns/isSameDay';
// import format from 'date-fns/format'
// //import parse from 'date-fns/parse'
// import toDate from 'date-fns/toDate'


// class CalendarTwo extends React.Component {
//     state = {
//         currentMonth: new Date(),
//         selectedDate: new Date()
//     };

//     renderHeader() {
//         const dateFormat = "MMMM yyyy";
//         return (
//             <div className="header row flex-middle">
//                 <div className="col col-start">
//                     <div className="icon" onClick={this.prevMonth}>
//                         chevron_left
//               </div>
//                 </div>
//                 <div className="col col-center">
//                     <span>
//                         {format(this.state.currentMonth, dateFormat)}
//                     </span>
//                 </div>
//                 <div className="col col-end" onClick={this.nextMonth}>
//                     <div className="icon">chevron_right</div>
//                 </div>
//             </div>
//         );
//     }
//     renderDays() {
//         const dateFormat = "dddd";
//         const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//         let startDate = startOfWeek(this.state.currentMonth);
//         for (let i = 0; days.length < 7; i++) {
//             days.push(
//                 <div className="col col-center" key={i}>
//                     {format(addDays(startDate, i), dateFormat)}
//                 </div>
//             );
//         }
//         return <div className="days row">
//             <div className= 'col cell'>
//                 {days[0]}
//             </div>
//             <div className= 'col cell'>
//                 {days[1]}
//             </div>
//             <div className= 'col cell'>
//                 {days[2]}
//             </div>
//             <div className= 'col cell'>
//                 {days[3]}
//             </div>
//             <div className= 'col cell'>
//                 {days[4]}
//             </div>
//             <div className= 'col cell'>
//                 {days[5]}
//             </div>
//             <div className= 'col cell'>
//                 {days[6]}
//             </div>
//             </div>;
//     }
//     renderCells() {
//         const { currentMonth, selectedDate } = this.state;
//         const monthStart = startOfMonth(currentMonth);
//         const monthEnd = endOfMonth(monthStart);
//         const startDate = startOfWeek(monthStart);
//         const endDate = endOfWeek(monthEnd);
//         const dateFormat = "d";
//         const rows = [];
//         let days = [];
//         let day = startDate;
//         let formattedDate = "";
//         while (day <= endDate) {
//             for (let i = 0; i < 7; i++) {
//                 formattedDate = format(day, dateFormat);
//                 const cloneDay = day;
//                 days.push(
//                     <div
//                         className={`col cell ${
//                             !isSameMonth(day, monthStart)
//                                 ? "disabled"
//                                 : isSameDay(day, selectedDate) ? "selected" : ""
//                             }`}
//                         key={day}
//                         onClick={() => this.onDateClick(toDate(cloneDay))}
//                     >
//                         <span className="number">{formattedDate}</span>

//                     </div>
//                 );
//                 day = addDays(day, 1);
//             }
//             rows.push(
//                 <div className="row" key={day}>
//                     {days}
//                 </div>
//             );
//             days = [];
//         }
//         return <div className="body">{rows}</div>;
//     }
//     onDateClick = day => {
//         this.setState({
//           selectedDate: day
//         });
//       };
//     nextMonth = () => {
//         this.setState({
//             currentMonth: addMonths(this.state.currentMonth, 1)
//         });
//     };
//     prevMonth = () => {
//         this.setState({
//             currentMonth: subMonths(this.state.currentMonth, 1)
//         });
//     };
//     render() {
//         return (
//             <div className="calender">
//                 {this.renderHeader()}
//                 {this.renderDays()}
//                 {this.renderCells()}
//             </div>
//         );
//     }
// }

// export default CalendarTwo;

function Planner() {

    return (

        <>
        
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Hours</th>
                        <th scope="col">Monday</th>
                        <th scope="col">Tuesday</th>
                        <th scope="col">Wednesday</th>
                        <th scope="col">Thursday</th>
                        <th scope="col">Friday</th>
                        <th scope="col">Saturday</th>
                        <th scope="col">Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">0800</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">0900</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1000</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1100</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1200</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1300</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1400</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1500</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1600</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1700</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                  
                </tbody>
            </table>
            
            <PlannerForm/>

        </>
    );
}

export default Planner