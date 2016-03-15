(function() {
	'use strict';

	angular.module('mindsmash.oauth2')
	
	.provider('AuthUser', function() {
		// Config
		var url = null;
			
		/**
		 * Set base url for api calls.
		 */
		this.url = function(_url_) {
			url = _url_;
		};
		
		this.$get = function(railsResourceFactory, railsSerializer) {
	
			var Resource = railsResourceFactory({
				url: url,
				name: 'account',
				serializer: railsSerializer(function() {
				})
			});
			
			// class members
			angular.extend(Resource, {
				findByUsername : function(username) {
					return Resource.get({username: username});
				}
			});
		
			// instance members
			angular.extend(Resource.prototype, {
			});
			
			return Resource;
		};
	});
})();