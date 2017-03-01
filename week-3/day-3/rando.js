
module.exports = function random(maximum) {
    foo();
    return Math.ceil( Math.random() * maximum );
};

// this function is ONLY available in this module
function foo() {
    console.log('foo');
}
