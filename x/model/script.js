    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    var diameter = 1152,
        radius = diameter / 2,
        innerRadius = radius - 300;

    var cluster = d3.cluster()
        .size([360, innerRadius]);

    var line = d3.radialLine()
        .curve(d3.curveBundle.beta(0.85))
        .radius(function(d) { return d.y; })
        .angle(function(d) { return d.x / 180 * Math.PI; });

    var svg = d3.select("div#container")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-576 -576 1152 1152")
        .classed("svg-content", true);
    svg
        .append("g")
        .attr("transform", "translate(" + radius + "," + radius + ")");

    var link = svg.append("g").selectAll(".link"),
        node = svg.append("g").selectAll(".node");

    d3.json("https://artnp.github.io/editusstudio/x/model/bigdata.json", function(error, classes) {
        if (error) throw error;

        var root = packageHierarchy(classes)
            .sum(function(d) { return d.size; });

        cluster(root);

        var x = packageImports(root.leaves());
        var arr = [], arr2 = [];
        for (var i = 0; i < x.length; i++) {
            arr.push(x[i][0].data.key);
            arr2.push(x[i][x[i].length - 1].data.key);
        }
        console.log(arr.length);
        link = link
            .data(packageImports(root.leaves()))
            .enter().append("path")
            .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })
            .attr("class", "link")
            .attr("d", line);

        node = node
            .data(root.leaves());

        node
            .enter().append("a")
            .attr("class", "node")
            .attr("dy", "0.31em")
            .attr("xlink:href", function(d) {
                if (d.data.url === undefined) {}
                else {
                    return d.data.url;
                }
            })
            .append("text")
            .attr("class", "node")
            .attr("dy", "0.31em")
            .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); })
            .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
            .text(function(d) { return d.data.key; })
            .on("mouseover", mouseovered)
            .on("mouseout", mouseouted);
    });

    function mouseovered(d) {
        node
            .each(function(n) { n.target = n.source = false; });

        link
            .classed("link--target", function(l) { if (l.target === d) return l.source.source = true; })
            .classed("link--source", function(l) { if (l.source === d) return l.target.target = true; })
            .filter(function(l) { return l.target === d || l.source === d; })
            .raise();

        node
            .classed("node--target", function(n) { return n.target; })
            .classed("node--source", function(n) { return n.source; });

        div
            .transition()
            .duration(200)
            .style("opacity", .9);
        div
            .html(d.data.key + "<br/>")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    }

    function mouseouted(d) {
        link
            .classed("link--target", false)
            .classed("link--source", false);

        node
            .classed("node--target", false)
            .classed("node--source", false);
        div
            .transition()
            .duration(500)
            .style("opacity", 0);
    }

    function packageHierarchy(classes) {
        var map = {};

        function find(name, data) {
            var node = map[name],
                i;
            if (!node) {
                node = map[name] = data || { name: name, children: [] };
                if (name.length) {
                    node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
                    node.parent.children.push(node);
                    node.key = name.substring(i + 1);
                }
            }
            return node;
        }

        classes.forEach(function(d) {
            find(d.name, d);
        });

        return d3.hierarchy(map[""]);
    }

    function packageImports(nodes) {
        var map = {},
            imports = [];

        nodes.forEach(function(d) {
            map[d.data.name] = d;
        });

        nodes.forEach(function(d) {
            if (d.data.imports) d.data.imports.forEach(function(i) {
                imports.push(map[d.data.name].path(map[i]));
            });
        });

        return imports;
    }

    function update(year) {
        d3.json("https://artnp.github.io/editusstudio/x/model/bigdata.json", function(error, classes) {
            if (error) throw error;
            classes = classes.filter(function(d, i) {
                if (parseInt(d.name.substr(0, d.name.lastIndexOf("."))) === year) {
                    return d;
                }
                if (d.name.substr(0, d.name.lastIndexOf(".")) === 'x') {
                    return d;
                }
                if (d.name.substr(0, d.name.lastIndexOf(".")) === 'y') {
                    return d;
                }
                if (d.name.substr(0, d.name.lastIndexOf(".")) === 'z') {
                    return d;
                }
            })

            console.log(classes);
            var root = packageHierarchy(classes)
                .sum(function(d) { return d.size; });

            cluster(root);


            link = link.data(packageImports(root.leaves()));
            link.exit().remove();
            link
                .enter()
                .append("path")
                .merge(link)
                .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })
                .attr("class", "link")
                .attr("d", line);


            node = node.data(root.leaves());
            node.exit().remove();
            node
                .enter()
                .append("text")
                .merge(node)
                .attr("class", "node")
                .attr("dy", "0.31em")
                .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y
                    ) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); })
                .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
                .text(function(d) { return d.data.key; })
                .on("mouseover", mouseovered)
                .on("mouseout", mouseouted);
        });
      }