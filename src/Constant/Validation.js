'use strict';

let constants = {
    EMAIL: {
        ENTER: "Please enter Email Id",
        VALID: "Email Id should be valid",
    },
    PASSWORD: {
        ENTER: "Please enter Password",
        VALID: "Password should be min 6 digits",
    },
    CONFIRM_PASSWORD: {
        VALID: "Confirm Password should be min 6 digits",
        NOT_MATCH: "Confirm Password doesn't match with Password",
    },



        
};

module.exports = Object.freeze(constants); // freeze prevents changes by users

//let constants = require('./constants');
//console.log(constants.key1);
