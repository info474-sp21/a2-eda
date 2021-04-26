// // Main JavaScript File

/*
- plot examples: https://vega.github.io/vega-lite/examples/
- mark types (bar, line, point): https://vega.github.io/vega-lite/docs/mark.html
- data types (quantitative/numeric, temporal/time, nominal/categorical, ordinal/ordered): https://vega.github.io/vega-lite/docs/type.html
- transform (aggregate, bin, calculate, filter): https://vega.github.io/vega-lite/docs/transform.html
- time unit transform: https://vega.github.io/vega-lite/docs/timeunit.html#transform
- tooltip: https://vega.github.io/vega-lite/docs/tooltip.html

*/

// var yourVlSpec = {
//     // $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
//     // description: 'A simple bar chart with embedded data.',
//     title: "A Simple Bar Chart",
//     width: 300,
//     height: 200,
//     data: {
//         values: [
//             { a: 'A', b: 28 },
//             { a: 'B', b: 55 },
//             { a: 'C', b: 43 },
//             { a: 'D', b: 91 },
//             { a: 'E', b: 81 },
//             { a: 'F', b: 53 },
//             { a: 'G', b: 19 },
//             { a: 'H', b: 87 },
//             { a: 'I', b: 52 }
//         ]
//     },
//     mark: 'bar',
//     encoding: {
//         x: { field: 'a', type: 'ordinal' },
//         y: { field: 'b', type: 'quantitative' },
//         color: {
//             condition: {
//                 test: "datum['a'] === 'A'|| datum['b'] === 52",
//                 value: "#aaa"
//             }
//         }
//     }
// };

var yourVlSpec = {
    // $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    // description: 'A simple bar chart with embedded data.',
    title: "A Simple Bar Chart",
    width: 300,
    height: 200,
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
    layer: [{
        mark: 'bar',
        encoding: {
            x: { field: 'a', type: 'ordinal' },
            y: { field: 'b', type: 'quantitative' },
            color: {
                condition: {
                    test: "datum['a'] === 'A'|| datum['b'] === 52",
                    value: "#aaa"
                }
            },
            tooltip:[
            {"field": "a", "type": "nominal", "title": "Field A"},
            {"field": "b", "type": "quantitative", "title": "Field B"}
          ]
        }

    },
    {
        "mark": { "type": "text", "style": "label" },
        "encoding": {
            x: { field: 'a', type: 'ordinal' },
            y: { field: 'b', type: 'quantitative' },
            text: { field: "b", type: "quantitative" }
        }
    }]
    ,
    "config": {
        "style": {
            "label": {
                dy: -5
                // "align": "center"
                // "baseline": "middle"
                // "dx": -10
            }
        }
    }
};
vegaEmbed('#vis', yourVlSpec);


var vega_tutorial = {
    // $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    // description: 'A simple bar chart with embedded data.',
    data: {
        values: [
            { "a": "C", "b": 2 },
            { "a": "C", "b": 7 },
            { "a": "C", "b": 4 },
            { "a": "D", "b": 1 },
            { "a": "D", "b": 2 },
            { "a": "D", "b": 6 },
            { "a": "E", "b": 8 },
            { "a": "E", "b": 4 },
            { "a": "E", "b": 7 }
        ]
    },
    mark: 'bar',
    encoding: {
        // "x": {"field": "a", "type": "nominal"},
        // "y": {"field": "b", "type": "quantitative", "aggregate": "average"}
        "y": { "field": "a", "type": "nominal", "title": "y-axis title" },
        "x": { "aggregate": "average", "field": "b", "type": "quantitative", "title": "Mean of b" }
    }
};
vegaEmbed('#vis2', vega_tutorial);



var explore = {
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/lecture-4-20-wk4-a-fetch/main/data/fatal-police-shootings-data.csv" },
    mark: "bar",
    encoding: {
        x: { bin: true, field: "age", type: "quantitative" },
        y: { aggregate: "count" }
    }
}

vegaEmbed("#vis3", explore)

// need to filter out 2020 data before plotting
// transform: https://vega.github.io/vega-lite/docs/timeunit.html
// range, year:  https://vega.github.io/vega-lite/docs/predicate.html
// https://vega.github.io/vega-lite/docs/filter.html

// calculate & filter: https://vega.github.io/vega-lite/docs/calculate.html
// transform & filter: https://vega.github.io/vega-lite/docs/format.html
var year = {
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/lecture-4-20-wk4-a-fetch/main/data/fatal-police-shootings-data.csv" },
    "transform": [
        {
            "timeUnit": "year", // get the year from date and make it into a new field called year-phung
            "field": "date",
            "as": "year_phung"
        }
        // {filter: {field: "year_phung", "lt": "2020"}}
    ],
    mark: "line",
    encoding: {
        x: { field: "year_phung", type: "temporal", axis: { "labelAngle": 15 } }, // , "lt": 2020-01-01
        y: { aggregate: "count", field: "name" },
        tooltip: { timeUnit: "year", field: "year_phung", type: "temporal" }
        // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
    }
}


// var year = {
//     data: { "url": "https://raw.githubusercontent.com/info474-sp21/lecture-4-20-wk4-a-fetch/main/data/fatal-police-shootings-data.csv" },
//     // "transform": [
//     //     {
//     //         "timeUnit": "year", // get the year from date and make it into a new field called year-phung
//     //         "field": "date",
//     //         "as": "year-phung"
//     //     }
//     // ],
//     "transform": [
//         { "calculate": "{'W': 'White', 'O': 'Other', 'N': 'Native American', 'H': 'Hispanic', 'B': 'Black', 'A': 'Asian', '': 'unknown'}[datum.race]", "as": "race" }
//     ],
//     mark: "bar",
//     encoding: {
//         x: { timeUnit: "month", field: "date", type: "ordinal" }, // , "lt": 2020-01-01
//         y: { aggregate: "count", field: "name", type: "quantitative" },
//         color: {
//             field: "race",
//             type: "nominal",
//             // legend: { labelExpr: "{'W': 'White', 'O': 'Other', 'N': 'Native American', 'H': 'Hispanic', 'B': 'Black', 'A': 'Asian', '': 'unknown'}[datum.label]" },
//             scale: {
//                 domain: ["White", "Other", "Native American", "Hispanic", "Black", "Asian", 'unknown'],
//                 range: ["#FFA500", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd", "#e7ba52", '#eeeeee']
//             },
//             title: "Race"
//         },
//         tooltip: { field: "race", "type": "nominal" },
//     }
// }

vegaEmbed("#vis4", year)
