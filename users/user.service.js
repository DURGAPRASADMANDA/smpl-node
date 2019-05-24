const userMDL = require('../../models/client.model');
const fetchUsers = async () => {
    try {
        return await userMDL.find();
    } catch (err) {
        throw err;
    }
};
module.exports = {
    fetchUsers: fetchUsers
};
