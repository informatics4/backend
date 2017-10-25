module.exports = {
    sendEmail : function(email, next){
        sails.hooks.email.send("testEmail",  
            {
                message : "Security warning at the university of strathmore"
            },
            {
                to: email,
                subject: "Securoty warning in the university of strathmore"
            }, 
            function(err) {
                console.log(err || "sent mail!");
                next(email)
            }
        )
    }
}
