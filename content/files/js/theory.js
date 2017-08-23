// Variables
var w = 750,
    h = 200;

var regime_y = 110,
    ingo_y = 100,
    line_y = 130,
    restrict_y = 150,
    coop_y = 55;

var initial_width = 450,
    regime_x = 175,
    ingo_x = 325;

var radius = 15,
    stroke_width = 7;

var regime_color = "#D92E20",
    ingo_color = "#4AACD6",
    line_color = "#bbbdc0",
    good_color = "#4daf4a",
    medium_color = "#ff7f00",
    bad_color = "#e41a1c";


// Helpful functions
// Dragging handler
var drag = d3.behavior.drag()
    .origin(function(d) { return d; })
    .on("drag", dragmove);

// Actual dragging
function dragmove(d) {
    d.x += d3.event.dx;
    d3.select(this).attr("transform", "translate(" + d.x + "," + 0 + ")");
    redraw_lines();
    // For bounding x within a box... doesn't work with translate though, since translate is all relative
    // .attr("cx", d.x = Math.max(radius, Math.min(w - radius, d3.event.x)));
}

// Redraw lines
function update(new_width, new_center, id) {
    // Update HTML slider
    // d3.select("#width_"+id+"-value").text(new_width);
    d3.select("#width_"+id).property("value", new_width);

    // Redraw line
    // TODO: Make one side heavier by dividing by 4 or 8 or something, but switch by regime or INGO
    if (id == "regime") {
        eval(id+"Line")
            .attr("x1", new_center - (new_width/4))
            .attr("x2", new_center + (new_width/2));
    } else {
        eval(id+"Line")
            .attr("x1", new_center - (new_width/2))
            .attr("x2", new_center + (new_width/4));
    };


    // Redraw point
    eval(id+"Point").attr("cx", new_center);

    redraw_lines();
}

function redraw_lines() {
    // Account for transformations
    // THIS IS SO HACKY AHHHH ¯\_(ツ)_/¯
    // The transformation information is saved as as string: "transform(50,0)"
    // This extracts the first number from that string
    regime_transform = Number(regimeGroup.attr("transform").match(/-*\d+/g)[0]);
    ingo_transform = Number(ingoGroup.attr("transform").match(/-*\d+/g)[0]);

    // Get endpoints
    restrict_min = Number(regimeLine.attr("x2")) + regime_transform;
    restrict_max = Number(ingoLine.attr("x1")) + ingo_transform;
    restrict_width = restrict_max - restrict_min;

    coop_min = Number(regimePoint.attr("cx")) + regime_transform;
    coop_max = Number(ingoPoint.attr("cx")) + ingo_transform;
    coop_width = coop_max - coop_min;

    // Redraw everything
    restrictionLine
        .attr("x1", restrict_min)
        .attr("x2", restrict_max);

    restrictionLabel
        .attr("x", restrict_min + restrict_width/2);

    coopLine
        .attr("x1", coop_min)
        .attr("x2", coop_max);

    coopLabel
        .attr("x", coop_min + coop_width/2);

    // Change label for cooperation
    if (coop_width <= 300) {
        coopLabel.text("Cooperation")
            .attr("fill", good_color);
        coopLine.attr("stroke", good_color);
    // } else if (coop_width > 180 && coop_width < 360) {
    //     coopLabel.text("Mitigation")
    //         .attr("fill", medium_color);
    //     coopLine.attr("stroke", medium_color);
    } else {
        coopLabel.text("Antagonism")
            .attr("fill", bad_color);
        coopLine.attr("stroke", bad_color);
    }

    // Change label for restrictions
    // Double negative since I really care about the overlap, not the gap
    coop_prop = (-restrict_width)/coop_width;
    if (coop_prop <= 0) {
        restrictionLabel.text("Expulsion")
            .attr("fill", bad_color);
        restrictionLine.attr("stroke", bad_color);
    // } else if (coop_prop > 0 && coop_prop < 0.35) {
    //     restrictionLabel.text("Constraint")
    //         .attr("fill", medium_color);
    //     restrictionLine.attr("stroke", medium_color);
    } else {
        restrictionLabel.text("Tolerance")
            .attr("fill", good_color);
        restrictionLine.attr("stroke", good_color);
    }
}


// Set up canvas
var svg = d3.select("#simulation").append("svg")
    .attr("width", w)
    .attr("height", h);


// Add supporting details and labels
var preferenceLine = svg.append("line")
    .attr("x1", 15).attr("y1", line_y)
    .attr("x2", w - 15).attr("y2", line_y)
    .attr("stroke", "black")
    .attr("stroke-width", 2);

var restrictionLine = svg.append("line")
    .attr("x1", 1).attr("y1", restrict_y)
    .attr("x2", 2).attr("y2", restrict_y)
    .attr("stroke", line_color)
    .attr("stroke-width", 2)

var coopLine = svg.append("line")
    .attr("x1", 1).attr("y1", coop_y)
    .attr("x2", 2).attr("y2", coop_y)
    .attr("stroke", line_color)
    .attr("stroke-width", 2)

var restrictionLabel = svg.append("text")
    .attr("x", 1)
    .attr("y", restrict_y + 20)
    .text("Tolerance - Constraint - Expulsion")
    .attr("text-anchor", "middle")
    .attr("fill", line_color);

var coopLabel = svg.append("text")
    .attr("x", 1)
    .attr("y", coop_y - 10)
    .text("Compliance - Mitigation - Antagonism")
    .attr("text-anchor", "middle")
    .attr("fill", line_color);


// Add groups
var regimeGroup = svg.append("g")
    .data([{x: 50, y: regime_y}])
    .attr("transform", function (d) {return "translate(" + d.x + "," + 0 + ")";})
    .attr("cursor", "ew-resize")
    .attr("class", "regime-group")
    .call(drag);

var ingoGroup = svg.append("g")
    .data([{x: 200, y: ingo_y}])
    .attr("transform", function (d) {return "translate(" + d.x + "," + 0 + ")";})
    .attr("cursor", "ew-resize")
    .attr("class", "ingo-group")
    .call(drag);


// Add initial lines
var regimeLine = regimeGroup.append("line")
    .attr("id", "regimeLine")
    .attr("x1", 1).attr("y1", regime_y)
    .attr("x2", 2).attr("y2", regime_y)
    .attr("stroke", regime_color)
    .attr("stroke-width", stroke_width);

var ingoLine = ingoGroup.append("line")
    .attr("id", "ingoLine")
    .attr("x1", 1).attr("y1", ingo_y)
    .attr("x2", 2).attr("y2", ingo_y)
    .attr("stroke", ingo_color)
    .attr("stroke-width", stroke_width);


// Add initial points
var regimePoint = regimeGroup.append("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", radius).attr("fill", regime_color);

var ingoPoint = ingoGroup.append("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", radius).attr("fill", ingo_color);


// Add initial labels
var regimeLabel = regimeGroup.append("text")
    .attr("x", regime_x)
    .attr("y", regime_y - 1.5*radius)
    .text("Regime")
    .attr("text-anchor", "middle")
    .attr("fill", regime_color);

var ingoLabel = ingoGroup.append("text")
    .attr("x", ingo_x)
    .attr("y", ingo_y - 1.5*radius)
    .text("INGO")
    .attr("text-anchor", "middle")
    .attr("fill", ingo_color);


// Initialize
update(initial_width, regime_x, "regime");
update(initial_width, ingo_x, "ingo");


// Adjust line widths using sliders
d3.select("#width_regime").on("input", function() {
    update(+this.value, regime_x, "regime");
});

d3.select("#width_ingo").on("input", function() {
    update(+this.value, ingo_x, "ingo");
});
