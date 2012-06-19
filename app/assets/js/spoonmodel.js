var Spoon= Backbone.Model.extend({
	initialize: function(){
		console.log("woo hoo");
	},
	defaults: {
		firstWord:  "Hello",
		secondWord: "World"
	}
	validate:function (attrs){
		if( !_.isString(attrs.firstWord) || attrs.firstWord.length === 0 ){
			return "Put in a first word"
		}
	}
});

var Spoons = Backbone.Collection.extend({
	initialize: function(){
		console.log("More spoons the better");
	},
	model: Spoon
});