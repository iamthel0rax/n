var validate = function(types, args, typesAsStrs) {
	if(typeof typesAsStrs === 'undefined') typesAsStrs = false;
	var t;
	if((t = typeof types) !== 'undefined' && t === typeof args)
		if(Array.isArray(types) && (t = types.length) == args.length) {
			if(typesAsStrs) {
				for(var i = 0; i < t; i++)
					if(typeof args[i] !== types[i]) return false;
			} else {
				for(var i = 0; i < t; i++)
					if(typeof args[i] !== types[i]) return false;
			}
			return true;		
			
		}
	return false;
}

module.export = validate;