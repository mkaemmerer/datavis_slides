$(function(){
	new Tangle($('.edit-group')[0], {
		initialize: function(){
			var g = d3.select("g")

			this.dx    = 250
			this.dy    = 200
			this.r     = 0
			this.s     = 1
		},
		update: function(){
			var self = this

			d3.select("g")
				.attr("transform", function(d){
					var translate = "translate(" + self.dx + "," + self.dy + ") "
					  , rotate    = "rotate(" + self.r + ") "
					  , scale     = "scale(" + self.s + ") "

					return translate + rotate + scale
				})
		}
	})
})
