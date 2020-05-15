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
  deleteAnnouncement: function() {
    return axios.delete("/api/dashboard/");
  },
  // Update an Announcement with given id
  updateAnnouncement: function() {
    return axios.put("/api/dashboard/");
  }
};


//   // Gets the Announcement with the given id
//   getAnnouncement: function() {
//     return axios.get("/api/dashboard/" + id);
//   },