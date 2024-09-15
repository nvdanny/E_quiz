const User = require("../models/User");

module.exports = {
    getAllUser: async() => {
        try {
            const users = await User.find({}, {password: 0});
            if (!users) {
                return {
                    success: false,
                    msg: "Cannot find resouces",
                }
            }
            else {
                return {
                    success: true,
                    users
                }
            }
        }
        catch(err) {
            console.log(err);
            return {
                success: false,
                msg: "Cannot find resouces",
            }
        }
    },

    getOneUser: async(user, id) => {
        try {
            if (user.id == id || user.role === "admin") {
                const user = await User.findById(id, {password: 0});
                if (!user) {
                    return {
                        success: false,
                        msg: "User not found"
                    }
                }
                else {
                    return {
                        success: true,
                        user
                    }
                }
            }
            else {
                return {
                    success: false,
                    msg: "Unauthorized"
                }
            }
        }
        catch(err) {
            console.log(err);
            return {
                success: false,
                msg: "Cannot find resouces"
            }
        }
    },

    editUser: async(user, id, data) => {
        try {
            if (user.id == id || user.role === "admin") {
                const checkUser = await User.findById(id);
                if (!checkUser) {
                    return {
                        success: false,
                        msg: "Cannot find user"
                    }
                }
                else {
                    checkUser.set(data);
                    await checkUser.save();
                    return {
                        success: true,
                        msg: "updated successfully"
                    }
                }
            }
            else {
                return {
                    success: false,
                    msg: "Unauthorized"
                }
            }
        }
        catch(err) {
            console.log(err);
            return {
                success: false,
                msg: "cannot edit user"
            }
        }
    },

    deleteUser: async(id) => {
        try {
            if (user.role === "admin") {
                await User.findByIdAndDelete(id);
                return {
                    success: true,
                    msg: "Deleted user successfully"
                }
            }
            else {
                return {
                    success: false,
                    msg: "Unauthorized"
                }
            }
        }
        catch(err) {
            console.log(err);
            return {
                success: false,
                msg: "cannot delete user"
            }
        }
    },


}