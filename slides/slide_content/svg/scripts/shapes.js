$(function(){
	new Tangle($('.edit-circle')[0], {
		initialize: function(){
			var circle = d3.select("circle")

			this.cx     = parseInt(circle.attr("cx"), 10)
			this.cy     = parseInt(circle.attr("cy"), 10)
			this.r      = parseInt(circle.attr("r"),  10)
			annotateCircle()
		},
		update: function(){
			d3.select("circle")
				.attr("cx", this.cx)
				.attr("cy", this.cy)
				.attr("r",  this.r)
			annotateCircle()
		}
	})

	new Tangle($('.edit-rect')[0], {
		initialize: function(){
			var rect = d3.select("rect")

			this.x      = parseInt(rect.attr("x"), 10)
			this.y      = parseInt(rect.attr("y"), 10)
			this.width  = parseInt(rect.attr("width"),  10)
			this.height = parseInt(rect.attr("height"), 10)

			annotateRect()
		},
		update: function(){
			d3.select("rect")
				.attr("x", this.x)
				.attr("y", this.y)
				.attr("width", this.width)
				.attr("height", this.height)

			annotateRect()
		}
	})


	function annotateCircle(){
		annotateRadius()
		annotateCX()
		annotateCY()
	}
	function annotateRadius(){
		var circle = d3.select("circle")

		var line = d3.select("svg").selectAll(".radius")
		line
				.data([circle])
			.enter().append("line")
				.attr("class", "radius")
		line
			.attr("x1", function(d){ return +d.attr("cx") })
			.attr("x2", function(d){ return (+d.attr("cx")) + (+d.attr("r")) })
			.attr("y1", function(d){ return +d.attr("cy") })
			.attr("y2", function(d){ return +d.attr("cy") })

		var label = d3.select("svg").selectAll(".label-radius")
		label
				.data([circle])
			.enter().append("text")
				.attr("class", "label-radius")
		label
			.attr("x", function(d){ return (+d.attr("cx")) + (+d.attr("r"))/2 })
			.attr("y", function(d){ return +d.attr("cy") })
			.text(function(d){ return "r: " + d.attr("r")})
	}
	function annotateCX(){
		var circle = d3.select("circle")

		var line = d3.select("svg").selectAll(".cx")
		line
				.data([circle])
			.enter().append("line")
				.attr("class", "cx")
		line
			.attr("x1", function(d){ return 0 })
			.attr("x2", function(d){ return +d.attr("cx") })
			.attr("y1", function(d){ return +d.attr("cy") })
			.attr("y2", function(d){ return +d.attr("cy") })
		var label = d3.select("svg").selectAll(".label-cx")
		label
				.data([circle])
			.enter().append("text")
				.attr("class", "label-cx")
		label
			.attr("x", function(d){ return (+d.attr("cx"))/2 })
			.attr("y", function(d){ return +d.attr("cy") })
			.text(function(d){ return "cx: " + d.attr("cx")})
	}
	function annotateCY(){
		var circle = d3.select("circle")

		var line = d3.select("svg").selectAll(".cy")
		line
				.data([circle])
			.enter().append("line")
				.attr("class", "cy")
		line
			.attr("x1", function(d){ return +d.attr("cx") })
			.attr("x2", function(d){ return +d.attr("cx") })
			.attr("y1", function(d){ return 0 })
			.attr("y2", function(d){ return +d.attr("cy") })
		var label = d3.select("svg").selectAll(".label-cy")
		label
				.data([circle])
			.enter().append("text")
				.attr("class", "label-cy")
		label
			.attr("x", function(d){ return +d.attr("cx") })
			.attr("y", function(d){ return (+d.attr("cy"))/2 })
			.attr("transform", function(d){ return "rotate(-90," + d3.select(this).attr("x") + "," + d3.select(this).attr("y") + ")"} )
			.text(function(d){ return "cy: " + d.attr("cy")})
	}



	function annotateRect(){
		annotateX()
		annotateY()
		annotateWidth()
		annotateHeight()
	}
	function annotateX(){
		var rect = d3.select("rect")

		var line = d3.select("svg").selectAll(".x")
		line
				.data([rect])
			.enter().append("line")
				.attr("class", "x")
		line
			.attr("x1", function(d){ return 0 })
			.attr("x2", function(d){ return +d.attr("x") })
			.attr("y1", function(d){ return +d.attr("y") })
			.attr("y2", function(d){ return +d.attr("y") })
		var label = d3.select("svg").selectAll(".label-x")
		label
				.data([rect])
			.enter().append("text")
				.attr("class", "label-x")
		label
			.attr("x", function(d){ return +d.attr("x")/2 })
			.attr("y", function(d){ return +d.attr("y") })
			.text(function(d){ return "x: " + d.attr("x")})
	}
	function annotateY(){
		var rect = d3.select("rect")

		var line = d3.select("svg").selectAll(".y")
		line
				.data([rect])
			.enter().append("line")
				.attr("class", "y")
		line
			.attr("x1", function(d){ return +d.attr("x") })
			.attr("x2", function(d){ return +d.attr("x") })
			.attr("y1", function(d){ return 0 })
			.attr("y2", function(d){ return +d.attr("y") })
		var label = d3.select("svg").selectAll(".label-y")
		label
				.data([rect])
			.enter().append("text")
				.attr("class", "label-y")
		label
			.attr("x", function(d){ return +d.attr("x") })
			.attr("y", function(d){ return +d.attr("y")/2 })
			.attr("transform", function(d){ return "rotate(-90," + d3.select(this).attr("x") + "," + d3.select(this).attr("y") + ")"} )
			.text(function(d){ return "y: " + d.attr("y")})
	}
	function annotateWidth(){
		var rect = d3.select("rect")

		var label = d3.select("svg").selectAll(".width")
		label
				.data([rect])
			.enter().append("line")
				.attr("class", "width")
		label
			.attr("x1", function(d){ return +d.attr("x") })
			.attr("x2", function(d){ return (+d.attr("x")) + (+d.attr("width")) })
			.attr("y1", function(d){ return +d.attr("y") })
			.attr("y2", function(d){ return +d.attr("y") })
		var label = d3.select("svg").selectAll(".label-width")
		label
				.data([rect])
			.enter().append("text")
				.attr("class", "label-width")
		label
			.attr("x", function(d){ return (+d.attr("x")) + (+d.attr("width"))/2 })
			.attr("y", function(d){ return +d.attr("y") })
			.text(function(d){ return "width: " + d.attr("width")})
	}
	function annotateHeight(){
		var rect = d3.select("rect")

		var line = d3.select("svg").selectAll(".height")
		line
				.data([rect])
			.enter().append("line")
				.attr("class", "height")
		line
			.attr("x1", function(d){ return +d.attr("x") })
			.attr("x2", function(d){ return +d.attr("x") })
			.attr("y1", function(d){ return +d.attr("y") })
			.attr("y2", function(d){ return (+d.attr("y")) + (+d.attr("height")) })
		var label = d3.select("svg").selectAll(".label-height")
		label
				.data([rect])
			.enter().append("text")
				.attr("class", "label-height")
		label
			.attr("x", function(d){ return +d.attr("x") })
			.attr("y", function(d){ return (+d.attr("y")) + (+d.attr("height"))/2 })
			.attr("transform", function(d){ return "rotate(-90," + d3.select(this).attr("x") + "," + d3.select(this).attr("y") + ")"} )
			.text(function(d){ return "height: " + d.attr("height")})
	}
})
