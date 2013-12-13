var width  = 960
  , height = 500
  , w      = 200
  , h      = 200
  , x_scale          = d3.scale.linear()
      .domain([0,1])
      .range([5,w-5])
  , y_scale          = d3.scale.linear()
      .domain([0,1])
      .range([5,h-5])


var red  = "#D62728"
  , blue = "#1F77B4"

var points = function(n){
  return d3.range(n).map(function(){
    return {
      x: Math.random()
    , y: Math.random()
    }
  })
}

d3.select('svg.color')
  .call(colorPopout)

d3.select('svg.size')
  .call(sizePopout)

d3.select('svg.shape')
  .call(shapePopout)

d3.select('svg.tilt')
  .call(tiltPopout)

function colorPopout(){
  var draw_circle = d3.svg.symbol().size(100)

  //Distractor symbols
  this.call(drawDistractors(function(){
    this
      .attr("fill", blue)
      .attr("d", draw_circle)
  }))

  //Popout symbol
  this
    .select(".symbol:last-child")
    .attr("fill", red)
}

function shapePopout(){
  var draw_circle = d3.svg.symbol().size(100)
    , draw_square = d3.svg.symbol().size(100).type("square")

  //Distractor symbols
  this.call(drawDistractors(function(){
    this
      .attr("fill", blue)
      .attr("d", draw_circle)
  }))

  //Popout symbol
  this
    .select(".symbol:last-child")
    .attr("d", draw_square)
}

function sizePopout(){
  var draw_circle       = d3.svg.symbol().size(100)
    , draw_large_circle = d3.svg.symbol().size(200)

  //Distractor symbols
  this.call(drawDistractors(function(){
    this
      .attr("fill", blue)
      .attr("d", draw_circle)
  }))

  //Popout symbol
  this
    .select(".symbol:last-child")
    .attr("d", draw_large_circle)
}

function tiltPopout(){
  var draw_square = d3.svg.symbol().type("square").size(100)

  //Distractor symbols
  this.call(drawDistractors(function(){
    this
      .attr("fill", blue)
      .attr("d", draw_square)
  }))

  //Popout symbol
  this
    .select(".symbol:last-child")
    .attr("transform", function(d){
      var x = x_scale(d.x)
        , y = y_scale(d.y)
      return "translate(" + x + ", " + y + ")rotate(25)"
    })
}

function drawDistractors(styleCallback){
  return function(){
    var nodes = points(75)
      , force = d3.layout.force()
          .charge(-0.0001)
          .gravity(0.02)
          .size([1,1])
          .nodes(nodes)

    //Run simulation for 10 iterations to prevent symbols from clumping too close together
    var ticks = 20
    force.start()
    for (var i = 0; i < ticks; ++i) force.tick()
    force.stop()

    //Distractor symbols
    this.selectAll(".symbol")
        .data(nodes)
      .enter()
        .append("path")
        .attr("class", "symbol")
        .attr("transform", function(d){
          var x = x_scale(d.x)
            , y = y_scale(d.y)
          return "translate(" + x + ", " + y + ")"
        })
        .call(styleCallback)
  }
}
