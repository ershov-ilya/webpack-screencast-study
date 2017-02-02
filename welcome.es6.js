'use strict';

/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * Website:  http://ershov.pw/ (RU/ENG)
 * Date: 30.01.2017
 * Time: 11:06
 */

var env = process.env.NODE_ENV;

module.exports = function(message){
    console.log(`Welcome ${message}`);

    console.log('Development mode: '+ env);
};
