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
//     layer: [{
//         mark: 'bar',
//         encoding: {
//             x: { field: 'a', type: 'ordinal' },
//             y: { field: 'b', type: 'quantitative' },
//             color: {
//                 condition: {
//                     test: "datum['a'] === 'A'|| datum['b'] === 52",
//                     value: "#aaa"
//                 }
//             },
//             tooltip:[
//             {"field": "a", "type": "nominal", "title": "Field A"},
//             {"field": "b", "type": "quantitative", "title": "Field B"}
//           ]
//         }

//     },
//     {
//         "mark": { "type": "text", "style": "label" },
//         "encoding": {
//             x: { field: 'a', type: 'ordinal' },
//             y: { field: 'b', type: 'quantitative' },
//             text: { field: "b", type: "quantitative" }
//         }
//     }]
//     ,
//     "config": {
//         "style": {
//             "label": {
//                 dy: -5
//                 // "align": "center"
//                 // "baseline": "middle"
//                 // "dx": -10
//             }
//         }
//     }
// };
// vegaEmbed('#vis', yourVlSpec);



// var armed = {
//     title: {
//         text: "How many ",
//         subtitle: "Shootings have increased each year"
//     },
//     data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/fatal-police-shootings.csv" },
//     // "transform": [
//     //     {
//     //         "timeUnit": "year", // get the year from date and make it into a new field called year-phung
//     //         "field": "date",
//     //         "as": "year_phung"
//     //     }
//     //     // {filter: {field: "year_phung", "lt": "2020"}}
//     // ],
//     // transform: [{filter: {field: "year", lt: "2020"}}],
//     mark: {type: "line", tooltip: true},
//     encoding: {
//         x: { timeUnit: "year", field: "year", axis: { "labelAngle": 15 }}, // , "lt": 2020-01-01
//         y: { aggregate: "count", field: "name" },
//         // tooltip: { field: "year", type: "temporal" }
//         // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
//     }
// }

// vegaEmbed('#vis', armed);



// var vega_tutorial = {
//     // $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
//     // description: 'A simple bar chart with embedded data.',
//     data: {
//         values: [
//             { "a": "C", "b": 2 },
//             { "a": "C", "b": 7 },
//             { "a": "C", "b": 4 },
//             { "a": "D", "b": 1 },
//             { "a": "D", "b": 2 },
//             { "a": "D", "b": 6 },
//             { "a": "E", "b": 8 },
//             { "a": "E", "b": 4 },
//             { "a": "E", "b": 7 }
//         ]
//     },
//     mark: 'bar',
//     encoding: {
//         // "x": {"field": "a", "type": "nominal"},
//         // "y": {"field": "b", "type": "quantitative", "aggregate": "average"}
//         "y": { "field": "a", "type": "nominal", "title": "y-axis title" },
//         "x": { "aggregate": "average", "field": "b", "type": "quantitative", "title": "Mean of b" }
//     }
// };
// vegaEmbed('#vis2', vega_tutorial);

// need to filter out 2020 data before plotting
// transform: https://vega.github.io/vega-lite/docs/timeunit.html
// range, year:  https://vega.github.io/vega-lite/docs/predicate.html
// https://vega.github.io/vega-lite/docs/filter.html

// calculate & filter: https://vega.github.io/vega-lite/docs/calculate.html
// transform & filter: https://vega.github.io/vega-lite/docs/format.html
var country = {
    title: {
        text: "Distribution by Respondents by Country",
        subtitle: "The United States has the most number of respondents.",
        subtitleFontSize: 14
    },
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    // "transform": [
    //     {
    //         "timeUnit": "year", // get the year from date and make it into a new field called year-phung
    //         "field": "date",
    //         "as": "year_phung"
    //     }
    //     // {filter: {field: "year_phung", "lt": "2020"}}
    // ],
    // transform: [{filter: {field: "year", lt: "2020"}}],
    mark: { type: "bar", tooltip: true },
    encoding: {
        x: { field: "Country", title: "Country", type: "nominal", sort: "-y" }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
        y: { aggregate: "count", title: "Count of Records" },
        color: {
            condition: {
                test: "datum['Country'] !== 'United States'|| datum['b'] === 52",
                value: "#aaa"
            }
        },
        // tooltip: { field: "year", type: "temporal" }
        // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
    }
}

vegaEmbed("#vis1", country)


var age = {
    title: {
        text: "Distribution of Age",
        subtitle: "Most respondents are 20 to 40 year olds.",
        subtitleFontSize: 14
    },
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    transform: [{
        filter: "datum.Age <= 100 && datum.Age >= 0"
    }],
    mark: { type: "bar", tooltip: true },
    // transform: {
    //     filter: {"and":[{field: "Age", gte: 0}, {field: "Age", lte:100}]} // "datum['Age'] >= 0 && datam['Age'] <= 100"
    //   },
    encoding: {
        x: { bin: true, field: "Age" },
        y: { aggregate: "count" },
        color: {
            condition: {
                test: "datum.Age < 20 || datum.Age > 40",
                value: "#aaa"
            }
        },
    }
}

vegaEmbed("#vis2", age)



// var race = {
//     title: {
//         text: "Yearly Distribution of Deaths by Race",
//         subtitle: "White people were shot the most",
//     },
//     width: 200,
//     height: 200,
//     data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/fatal-police-shootings.csv" },
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
//         x: { timeUnit: "year", field: "date", type: "ordinal" }, // , "lt": 2020-01-01
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


// vegaEmbed("#vis3", race)

var treat = {
    title: {
        text: "Number of People who Did and Did Not Seek Treatment and Did Not",
        subtitle: "The number of people who sought treatment were almost equal to those who did not seek treatment.",
        subtitleFontSize: 14
    },
    width: 100,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    // "transform": [
    //     {
    //         "timeUnit": "year", // get the year from date and make it into a new field called year-phung
    //         "field": "date",
    //         "as": "year_phung"
    //     }
    //     // {filter: {field: "year_phung", "lt": "2020"}}
    // ],
    // transform: [{filter: {field: "year", lt: "2020"}}],
    mark: { type: "bar", tooltip: true },
    encoding: {
        x: { field: "treatment", title: "Country", type: "nominal", sort: "-y" }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
        y: { aggregate: "count", title: "Count of Records" }
        // color: {
        //     condition: {
        //         test: "datum['Country'] !== 'United States'|| datum['b'] === 52",
        //         value: "#aaa"
        //     }
        // },
        // tooltip: { field: "year", type: "temporal" }
        // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
    }
}


vegaEmbed("#vis3", treat)



var mental_physical = {
    title: {
        text: "Mental vs Physical",
        subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    // "transform": [
    //     {
    //         "timeUnit": "year", // get the year from date and make it into a new field called year-phung
    //         "field": "date",
    //         "as": "year_phung"
    //     }
    //     // {filter: {field: "year_phung", "lt": "2020"}}
    // ],
    // transform: [{filter: {field: "year", lt: "2020"}}],
    mark: { type: "bar", tooltip: true },
    encoding: {
        x: { field: "mental_vs_physical", title: "Country", type: "nominal", sort: "-y" }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
        y: { aggregate: "count", title: "Count of Records" },
        color: {
            condition: {
                test: 'datum["mental_vs_physical"] !== "Don\'t know"',
                value: "#aaa"
            }
        }
        // tooltip: { field: "year", type: "temporal" }
        // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
    }
}


vegaEmbed("#vis4", mental_physical)


var leave = {
    title: {
        text: "How easy to take Medical Leave for Mental Health",
        subtitle: "A majority of people were unsure whether it was easy for them to take medical leave for mental health. Of those who were sure, most found it to be somewhat easy or very easy.",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    mark: { type: "bar", tooltip: true },
    encoding: {
        x: { field: "leave", title: "Ease", type: "nominal", sort: "-y" }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
        y: { aggregate: "count", title: "Count of Records" },
        color: {
            condition: {
                test: 'datum["leave"] === "Somewhat difficult" || datum["leave"] === "Very difficult"',
                value: "#aaa"
            }
        }
        // tooltip: { field: "year", type: "temporal" }
        // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
    }
}


vegaEmbed("#vis5", leave)



var mental_physical = {
    title: {
        text: "Mental vs Physical",
        subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    // "transform": [
    //     {
    //         "timeUnit": "year", // get the year from date and make it into a new field called year-phung
    //         "field": "date",
    //         "as": "year_phung"
    //     }
    //     // {filter: {field: "year_phung", "lt": "2020"}}
    // ],
    // transform: [{filter: {field: "year", lt: "2020"}}],
    mark: { type: "bar", tooltip: true },
    encoding: {
        x: { field: "mental_vs_physical", title: "Country", type: "nominal", sort: "-y" }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
        y: { aggregate: "count", title: "Count of Records" },
        color: {
            condition: {
                test: 'datum["mental_vs_physical"] !== "Don\'t know"',
                value: "#aaa"
            }
        }
        // tooltip: { field: "year", type: "temporal" }
        // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
    }
}


vegaEmbed("#vis4", mental_physical)


var no_emp = {
    title: {
        text: "Number of Employees at Organization",
        subtitle: "Employers with fewer employees are less likely to provide mental health benefits compared to employers with many employees",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    mark: { type: "bar", tooltip: true },
    encoding: {
        x: { field: "no_employees", title: "Number of Employees", type: "nominal", sort: ["1-5", "6-25", "26-100", "100-500", "500-1000", "More than 1000"] }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
        y: { aggregate: "count", title: "Count of Records" },
        color: {
            field: "benefits",
            type: "nominal",
            scale: {
                domain: ["Yes", "No", "Don\'t know"],
                range: ['#009933', '#ff4d4d', '#aaa']
            },
            title: "Company Provides Mental Health Benefits"
        }
        // color: {
        //     condition: {
        //         test: 'datum["leave"] === "Somewhat difficult" || datum["leave"] === "Very difficult"',
        //         value: "#aaa"
        //     }
        // }
        // tooltip: { field: "year", type: "temporal" }
        // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
    }
}


vegaEmbed("#vis6", no_emp)


var seek_help = {
    title: {
        text: "Number of Employees at Organization",
        subtitle: "Although companies that do provide mental help benefits, most of them do not provide resources on how to seek help.",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    mark: { type: "bar", tooltip: true },
    encoding: {
        x: { field: "no_employees", title: "Number of Employees", type: "nominal", sort: ["1-5", "6-25", "26-100", "100-500", "500-1000", "More than 1000"] }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
        y: { aggregate: "count", title: "Count of Records" },
        color: {
            field: "seek_help",
            type: "nominal",
            scale: {
                domain: ["Yes", "No", "Don\'t know"],
                range: ['#009933', '#ff4d4d', '#aaa']
            },
            title: "Resources to Seek Help"
        }
        // color: {
        //     condition: {
        //         test: 'datum["leave"] === "Somewhat difficult" || datum["leave"] === "Very difficult"',
        //         value: "#aaa"
        //     }
        // }
        // tooltip: { field: "year", type: "temporal" }
        // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
    }
}


vegaEmbed("#vis7", seek_help)



var coworkers = {
    title: {
        text: "Cowowrker",
        subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    // "transform": [
    //     {
    //         "timeUnit": "year", // get the year from date and make it into a new field called year-phung
    //         "field": "date",
    //         "as": "year_phung"
    //     }
    //     // {filter: {field: "year_phung", "lt": "2020"}}
    // ],
    // transform: [{filter: {field: "year", lt: "2020"}}],
    mark: { type: "bar", tooltip: true },
    encoding: {
        x: { field: "coworkers", title: "Country", type: "nominal", sort: ["Yes", "No", "Some of them"] }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
        y: { aggregate: "count", title: "Count of Records" },
        // color: {
        //     condition: {
        //         test: 'datum["mental_vs_physical"] !== "Don\'t know"',
        //         value: "#aaa"
        //     }
        // }
        // tooltip: { field: "year", type: "temporal" }
        // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
    }
}


vegaEmbed("#vis8", coworkers)


var supervisor = {
    title: {
        text: "Supervisors",
        subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    // "transform": [
    //     {
    //         "timeUnit": "year", // get the year from date and make it into a new field called year-phung
    //         "field": "date",
    //         "as": "year_phung"
    //     }
    //     // {filter: {field: "year_phung", "lt": "2020"}}
    // ],
    // transform: [{filter: {field: "year", lt: "2020"}}],
    mark: { type: "bar", tooltip: true },
    encoding: {
        x: { field: "supervisor", title: "Country", type: "nominal", sort: ["Yes", "No", "Some of them"] }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
        y: { aggregate: "count", title: "Count of Records" },
        // color: {
        //     condition: {
        //         test: 'datum["mental_vs_physical"] !== "Don\'t know"',
        //         value: "#aaa"
        //     }
        // }
        // tooltip: { field: "year", type: "temporal" }
        // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
    }
}


vegaEmbed("#vis9", supervisor)

