/**
 * AlarmsController
 *
 * @description :: Server-side logic for managing Alarms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    sendNotificationToStaff : function(req,res){
        var email = (req.params.email) ? req.params.email : undefined
        EmailService.sendEmail(email,function(){
            console.log("good")
            res.json(200,{action : 'complete'})
        });
    },
    sendNotificationToStudents : function(req,res){
        EmailService.sendEmail(function(){
            console.log("good")
        });
    },
    sendNotificationToSecurity : function(req,res){
        EmailService.sendEmail(function(){
            console.log("good")
        });
    },
    sendNotificationToExternalSecurity : function(req,res){},
};

