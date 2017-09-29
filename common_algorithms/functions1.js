module.exports = function() {
    args1('hello', 'good', 'sir'); 
};


function args1 (a,b,c) {
    console.log('arguments[0] = ' + arguments[0]);
    console.log('arguments[2] = ' + arguments[2]);
}