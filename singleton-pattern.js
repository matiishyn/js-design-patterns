var mySigleton = (function() {
	var instance;	// reference to Object

	function init () {
		// Singl
		return {
			prop: 'val'
		};
	}

	return {
		getInstance: function() {
			if(!instance) {
				instance = init();
			}
			return instance;
		}
	};
})();

var singl1 = mySigleton.getInstance();
var singl2 = mySigleton.getInstance();
singl1 === singl2; // true