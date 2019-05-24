// Import required modules
const userSRVC = require('./user.service');

/**
 * This function is to fetch Users
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {function} next callback function
 */
const fetchUsers = async (req, res, next) => {
    try {
        const result = await userSRVC.fetchUsers();
        res.send(result);
        res.end();
    } catch (err) {
        next(err);
    }
};
module.exports = {
    fetchUsers: fetchUsers
};
