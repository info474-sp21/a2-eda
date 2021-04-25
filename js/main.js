// // Main JavaScript File

// // Data to visualize (shoe sizes along the horizontal)
// var data = [{
//         name: 'Amelia',
//         shoeSize: 10
//     },
//     {
//         name: 'Analisa',
//         shoeSize: 8
//     },
//     {
//         name: 'Joanna',
//         shoeSize: 7
//     },
//     {
//         name: 'Ash',
//         shoeSize: 9
//     }
// ];

// // // Use d3.min and d3.max to determine the domain of your scale
// // // let min = d3.min(data, (d) => d.shoeSize)
// // // let max = d3.max(data, d => d.shoeSize)
// let d = d3.extent(data, d => d.shoeSize)
// // // console.log(d)


// // Define a linear scale with your data domain and an output range of 50, 500
// let myScale = d3.scaleLinear()
//     // .domain([min, max])
//     .domain(d)
//     .range([50, 500])

// // You'll have to wait for you page to load to assign events to the elements created in your index.html file
// $(function() {
//     // Select SVG with id `my-svg` and assign it a width of 600 and a height of 100
//     let mySvg = d3.select("#my-svg")
//         .attr("width", 600)
//         .attr("height", 100)

//     // Define an axis for your scale with the ticks oriented on the bottom
//     let axis = d3.axisBottom()
//         .scale(myScale)

//     // Append a `g` element to your svg, shift it down 50 pixels by setting the transform property, and call your `axis function`
//     let axisLabel = mySvg.append("g")
//         .attr("class", "axis")
//         .attr("transform", "translate(0, 50)")
//         .call(axis)

//     // Append a circle for each element in your data by using the standard D3 data binding process
//     let circles = mySvg.selectAll("circle")
//         .data(data, d => d.name)
//         .join("circle")
//         .attr("cx", d => myScale(d.shoeSize))
//         .attr("cy", 25)
//         .attr("r", 15)
//         .style("fill", "blue")
//         .style("opacity", 0.4)


//     // .attr("cx", d => myScale(d.shoeSize))
//         // .attr("cy", 25)
//         // .attr("r", 15)
//         // .style("fill", "blue")
//         // .style("opacity", 0.4)

//     // Enter new circles

//     // circles.enter()
//     //     .append("circle")
//     //     .attr("cx", d => myScale(d.shoeSize))
//     //     .attr("cy", 25)
//     //     .attr("r", 15)
//     //     .style("fill", "blue")
//     //     .style("opacity", 0.4)

//     // Draw circles
//     // circles.exit().remove()

// });

var yourVlSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple bar chart with embedded data.',
    data: {
        values: [
            { a: 'A', b: 28 },
            { a: 'B', b: 55 },
            { a: 'C', b: 43 },
            { a: 'D', b: 91 },
            { a: 'E', b: 81 },
            { a: 'F', b: 53 },
            { a: 'G', b: 19 },
            { a: 'H', b: 87 },
            { a: 'I', b: 52 }
        ]
    },
    mark: 'bar',
    encoding: {
        x: { field: 'a', type: 'ordinal' },
        y: { field: 'b', type: 'quantitative' }
    }
};
vegaEmbed('#vis', yourVlSpec);