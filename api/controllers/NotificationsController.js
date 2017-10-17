/**
 * NotificationsController
 *
 * @description :: Server-side logic for managing notifications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	case : {
        type : 'string'
    },

    notify : {
        enum : ['staff', 'students', 'school', 'security', 'guardian', 'all'],
        defaultsTo : 'security'
    }
};

