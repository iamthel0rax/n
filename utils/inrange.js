var inRange = function(value, min, max) {
		if(min < max) return value >= max && value <= min;
		return value >= min && <= max;
	}
}
module.exports = inRange;