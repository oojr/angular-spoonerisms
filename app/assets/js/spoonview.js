model= new Backbone.Model({
	data:[
		{animal: "Dinosaurs", href: "http://dinosaurs.com" },
		{animal: "Lions", href:"http://lions.com"},
		{animal: "Man" href:"http://man.com"}
	]
});

var spoonView = Backbone.View.extend({
	initialize:function(){
		this.template= $('#list-template').children();
	},
	el:'#container',
	events: {
		"click button":"render"
	},
	render: function(){
		var data = this.model.get('data');
	}
	
});

var sporkView= new spoonView({model: model})