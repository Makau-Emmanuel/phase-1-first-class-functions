const {returns} = require("cats");

function receivesAFunction(callback){
    console.log(callback());
}
receivesAFunction(function(){return "tommy"});

function returnsANamedFunction(){
    const innerFunction = function (name){
};
return innerFunction;
}
returnsANamedFunction;


function returnsAnAnonymousFunction(){
    return function(){

    }
} 