'use strict';

/** Defaults applies default values to a options object
 * @name Defaults
 * @function
 * @param {Object} defaults Variable names and their corresponding default values.
 * @param {Object} options The options object to modify.
 * @param {Objects} [requirements] Key/Values that must be in the options object 
 */
var _module = { _name: "Defaults" };
	_module._function: function(defaults, options, requirements) {
	

	
	if(defaults && options) {
		if(typeof defaults === typeof options === 'object') {
			
			if(requirements && typeof requirements === 'object')
					for(requirement in requirements)
						if(typeof options.requirement === 'undefined')
							Err(this._name, "required parameter missing (" + requirement + ")");
			
			for(option in options)
				options.option = options.option || defaults.option;
			
			return true;
			
		} else Err(this._name, "parameter type(s) invalid");
	} else Err(this._name, "missing arguments(s)");
};

module.exports = _module._function;