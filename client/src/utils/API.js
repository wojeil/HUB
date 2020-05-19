import axios from "axios";

export default {
  // Gets all Announcements
  getAnnouncements: function() {
    return axios.get("/api/dash/get");
  },
  // Post new Announcements
  addAnnouncement: function(){
      return axios.post("/api/dash/post");
  },
  // Deletes the Announcements with the given id
  deleteAnnouncement: function(data) {
    return axios.post("/api/dash/remove",data)
    .then(res=> console.log(res)).catch(err =>console.log(err));
  },
  // Update an Announcement with given id
  updateAnnouncement: function(data) {
    return axios.post("/api/dash/add", data)
    .then(res => console.log(res)).catch(err => console.log(err));
  },
  /////////////////////////////////////////////////////////////
  //below contains requests for planner

  getPlan: function (){
    return axios.get("/api/plan/get");
  },


  addPlan: function (data) {
    return axios.post("api/plan/post",data)
    
  },
  updatePlan: function (data) {
    return axios.post("api/plan/update",data)
  },

   /////////////////////////////////////////////////////////////
  //below contains requests for plannerSearch

  getUser: function (){
    return axios.get("api/search/team")
  },

  getUserzPlanner: function (){
    return axios.get("api/search/:user")
  }
};




//   // Gets the Announcement with the given id
//   getAnnouncement: function() {
//     return axios.get("/api/dashboard/" + id);
//   },