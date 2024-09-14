const userServices = require('../services/userService');

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const response = await userServices.getAllUser();
            if (response.success) {
                res.status(200).json(response);
            }
            else {
                res.status(400).json(response);
            }
        }
        catch(err) {
            res.status(500).json({ success: false, msg: "Server Error" });
        }
    },

    getOneUser: async (req, res) => {
        try {
            const id = req.params.id;
            const user = req.user;
            const response = await userServices.getOneUser(user, id);
            if (response.success) {
                res.status(200).json(response);
            }
            else {
                res.status(400).json(response);
            }
        }
        catch(err) {
            res.status(500).json({ success: false, msg: "Server Error" });
        }
    },

    editUser: async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            const user = req.user;
            const response = await userServices.editUser(user, id, data);
            if (response.success) {
                res.status(200).json(response);
            }
            else {
                res.status(400).json(response);
            }       
        }
        catch(err) {
            res.status(500).json({ success: false, msg: "Server Error" });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const id = req.params.id;
            const response = await userServices.deleteUser(id);
            if (response.success) {
                res.status(200).json(response);
            }
            else {
                res.status(400).json(response);
            }       
        }
        catch(err) {
            res.status(500).json({ success: false, msg: "Server Error" });
        }
    }
}