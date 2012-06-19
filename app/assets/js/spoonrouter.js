var spoonRouter= Backbone.Router.extend({
	routes:{
	"*action":"func",
	"foo/:bar":"paramtest"
	},

	func: function(action){
		console.log(action)
	},
	paramtest: function(p){
		console.log(p);
	}


});

new spoonRouter();

Backbone.history.start();