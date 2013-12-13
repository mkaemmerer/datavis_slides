var w      = 200
  , h      = 200
  , x_scale          = d3.scale.linear()
      .domain([0,1])
      .range([20,w-20])
  , y_scale          = d3.scale.linear()
      .domain([0,1])
      .range([20,h-20])
  , area_scale       = d3.scale.linear()
      .domain([0,1])
      .range([5,80])
  , hue_scale        = d3.scale.linear()
      .domain([0,1])
      .range(["#fc8d59", "#91cf60"])
      .interpolate(d3.interpolateHcl)
  , saturation_scale = d3.scale.linear()
      .domain([0,1])
      .range(["#A9957E", "#FE9929"])
      .interpolate(d3.interpolateHcl)
  , lightness_scale  = d3.scale.linear()
      .domain([0,1])
      .range(["#0066A3", "#00d0ff"])
      .interpolate(d3.interpolateHcl)


d3.select("input")
  .on("change", function(){
    var value = d3.select(this).property("value")
    update(value)
  })

update(0.5)

function update(value){
  var main = d3.select("#main")
  main.select(".area")
    .datum(value)
    .call(area)
  main.select(".size")
    .datum(value)
    .call(size)
  main.select(".position")
    .datum(value)
    .call(position)
  main.select(".hue")
    .datum(value)
    .call(hue)
  main.select(".saturation")
    .datum(value)
    .call(saturation)
  main.select(".lightness")
    .datum(value)
    .call(lightness)
}


function area(){
  this.selectAll("circle")
      .data([this.datum()])
    .attr("r", function(d){ return area_scale(Math.sqrt(d)) })
}
function size(){
  this.selectAll("rect")
      .data([this.datum()])
    .attr("y",      function(d){ return (h - y_scale(d))/2 })
    .attr("height", y_scale)
}
function position(){
  this.selectAll("circle")
      .data([this.datum()])
    .attr("cx", x_scale)
}
function hue(){
  this.selectAll("rect")
      .data([this.datum()])
    .attr("fill", hue_scale)
}
function saturation(){
  this.selectAll("rect")
      .data([this.datum()])
    .attr("fill", saturation_scale)
}
function lightness(){
  this.selectAll("rect")
      .data([this.datum()])
    .attr("fill", lightness_scale)
}