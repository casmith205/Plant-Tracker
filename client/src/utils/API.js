import axios from "axios";

export default {
    // User axios functions
    // Check user login and log user in
    loginUser: function (user) {
        return axios.post("/api/login/", user);
    },
    // Register user
    registerUser: function (user) {
        return axios.post("/api/signup/", user);
    },
    // Update user
    updateUser: function (user) {
        return axios.put("/api/user", user);
    },
    // Delete user
    deleteUser: function (user) {
        return axios.delete("/api/user", user);
    },
    searchUser: function (user) {
        return axios.get("/api/user" + user);
    },

    // User and associated attributes axios functions
    // Get all plants database by calling get user
    getUser: function (id) {
        return axios.get("/api/user/" + id)
    },
    // Save a plant to user's database
    savePlant: function (plant) {
        return axios.post("/api/plant", plant);
    },
    //get all plants related to logged in use 
    getPlants : function(id){
        return axios.get("/api/findplant/"+id)
    },
    // Update plant status
    updatePlant: function (plant) {
        return axios.put("/api/plant/" + plant);
    },
    // Remove plant form user's database
    deletePlant: function (id) {
        return axios.delete("/api/plant/" + id);
    },

    // Badge axios functions
    // Awards the user a badge
    getBadge: function(user) {
        return axios.get("/api/badge" + user)
    },
    awardBadge: function (badge) {
        return axios.post("/api/badge", badge)
    }
};
