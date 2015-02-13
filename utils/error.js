var Err = function(module, message, callback) {
	throw new Error(module + "() --- Encountered an error:  " + message);
	if(typeof callback === 'undefined') return false;
}

module.exports = Err;