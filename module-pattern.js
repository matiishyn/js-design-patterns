var testModule = (function() {
	// private methods and variables
	var counter = 0;
	
	// public methods and variables
	return {
		increment: function() {
			return counter++;
		}
	}
})();