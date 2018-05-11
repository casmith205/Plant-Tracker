import axios from "axios";

export default {
    // User axios functions
    // Check user login and log user in
    loginUser: function (id) {
        return axios.get("/api/login/" + id);
    },
    // Register user
    registerUser: function (user) {
        return axios.post("/api/signup", user);
    },
    // Update user
    updateUser: function (user) {
        return axios.put("/api/user", user);
    },
    // Delete user
    deleteUser: function (user) {
        return axios.delete("/api/user", user);
    },

    // Plant axios functions
    // Search plant database
    searchPlant: function (id) {
        return axios.get("/api/search" + id)
    },
    // Save a plant to user's database
    savePlant: function (plant) {
        return axios.post("/api/plants", plant);
    },
    // Update plant status
    updatePlant: function (plant) {
        return axios.put("/api/plants" + plant);
    },
    // Remove plant form user's database
    deletePlant: function (id) {
        return axios.delete("/api/plants" + id);
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
