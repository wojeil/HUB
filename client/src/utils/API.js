import axios from "axios";

export default {
  // Gets all Announcements
  getAnnouncements: function() {
    return axios.get("/api/dashboard");
  },
  // Post all Announcements
  addAnnouncement: function(){
      return axios.post("/api/dashboard");
  },
  // Deletes the Announcements with the given id
  deleteAnnouncement: function() {
    return axios.delete("/api/dashboard/" + id);
  },
  // Update an Announcement with given id
  updateAnnouncement: function() {
    return axios.put("/api/dashboard/" +id);
  }
};


//   // Gets the Announcement with the given id
//   getAnnouncement: function() {
//     return axios.get("/api/dashboard/" + id);
//   },