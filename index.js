module.exports = [
    'args'
].reduce(function(result, libToInclude){
    result[libToInclude] = require('./lib/' + libToInclude)
    return result;
})