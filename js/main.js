// Main JavaScript File

var age = {
    title: {
        text: "Distribution of Age"
    },
    height: 300,
    width: 250,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    // transform: [{
    //     filter: "datum.Age <= 100 && datum.Age >= 0"
    // }],
    mark: { type: "point", tooltip: true, filled: true },
    // transform: {
    //     filter: {"and":[{field: "Age", gte: 0}, {field: "Age", lte:100}]} // "datum['Age'] >= 0 && datam['Age'] <= 100"
    //   },
    encoding: {
        x: { field: "Age", type: "quantitative" },
        y: { aggregate: "count", title: "Frequency" },
        size: { value: 60 },
        color: {
            condition: {
                test: "datum.Age >= 0 && datum.Age <= 100",
                value: "#aaa"
            }
        }
    }
}
vegaEmbed("#vis1", age)

var age_remove_large = {
    title: {
        text: "Distribution of Age",
        subtitleFontSize: 14
    },
    height: 300,
    width: 250,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    // transform: [{
    //     filter: "datum.Age <= 100 && datum.Age >= 0"
    // }],
    mark: { type: "point", tooltip: true, filled: true },
    transform: [{
        filter: "datum.Age < 100"
    }],
    encoding: {
        x: { field: "Age", type: "quantitative" },
        y: { aggregate: "count", title: "Frequency" },
        size: { value: 60 },
        color: {
            condition: {
                test: "datum.Age >= 0 && datum.Age <= 100",
                value: "#aaa"
            }
        }
    }
}
vegaEmbed("#vis2", age_remove_large)


var age_filter = {
    title: {
        text: "Distribution of Age"
    },
    height: 300,
    width: 250,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    // transform: [{
    //     filter: "datum.Age <= 100 && datum.Age >= 0"
    // }],
    mark: { type: "point", tooltip: true, filled: true },
    transform: [{
        filter: "datum.Age > 0 && datum.Age < 100"
    }],
    encoding: {
        x: { field: "Age", type: "quantitative" },
        y: { aggregate: "count", title: "Frequency" },
        size: { value: 60 }
    }
}
vegaEmbed("#vis3", age_filter)


var work_interfere = {
    title: {
        text: "Distribution of Work Interference of Mental Health Condition"
    },
    height: 300,
    width: 250,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    mark: { type: "bar", tooltip: true, filled: true },
    encoding: {
        x: {
            field: "work_interfere", type: "nominal", title: "Work Interference of Mental Health Condition",
            sort: ["Never", "Rarely", "Sometimes", "Often", "NA"]
        },
        y: { aggregate: "count", title: "Frequency" },
        color: {
            condition: {
                test: "datum.work_interfere !== 'NA'",
                value: "#aaa"
            }
        }
    }
}

vegaEmbed("#vis4", work_interfere)


var work_interfere_filter = {
    title: {
        text: "Distribution of Work Interference of Mental Health Condition"
    },
    height: 300,
    width: 250,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    mark: { type: "bar", tooltip: true, filled: true },
    transform: [{
        filter: "datum.work_interfere !== 'NA'"
    }],
    encoding: {
        x: {
            field: "work_interfere", type: "nominal", title: "Work Interference of Mental Health Condition",
            sort: ["Never", "Rarely", "Sometimes", "Often", "NA"]
        },
        y: { aggregate: "count", title: "Frequency" }
        // color: {
        //     condition: {
        //         test: "datum.work_interfere !== 'NA'",
        //         value: "#aaa"
        //     }
        // }
    }
}

vegaEmbed("#vis5", work_interfere_filter)


// var work_interfere_age = {
//     title: {
//         text: "Distribution of Work Interference of Mental Health Condition by Age"
//     },
//     height: 300,
//     width: 250,
//     data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
//     mark: { type: "bar", tooltip: true, filled: true },
//     transform: [{
//         filter: "datum.work_interfere !== 'NA' && datum.Age >= 0 && datum.Age <= 80"
//     }, {
//         bin: true,
//         field: "Age",
//         as: "binned_age"
//     }
//     ],
//     encoding: {
//         x: {
//             field: "work_interfere", type: "nominal", title: "Work Interference of Mental Health Condition",
//             sort: ["Never", "Rarely", "Sometimes", "Often", "NA"]
//         },
//         y: { aggregate: "count", "type": "quantitative", title: "Frequency" },
//         color: {
//             field: "binned_age",
//             type: "ordinal",
//             title: "Age (binned)"
//         }
//     }
// }

// vegaEmbed("#vis6", work_interfere_age)

// https://vega.github.io/vega-lite/docs/bar.html
var work_interfere_age = {
    title: {
        text: "Distribution of Work Interference of Mental Health Condition by Age"
    },
    height: 400,
    width: 400,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    mark: { type: "bar", tooltip: true, filled: true },
    transform: [{
        filter: "datum.work_interfere !== 'NA' && datum.Age >= 0 && datum.Age <= 80"
    }, {
        bin: true,
        field: "Age",
        as: "binned_age"
    }
    ],
    encoding: {
        y: {
            aggregate: "count"
        },
        x: {field: "binned_age"},
        color: {
            field: "work_interfere",
            // scale: {range: []}
        }

        // x: {
        //     field: "work_interfere", type: "nominal", title: "Work Interference of Mental Health Condition",
        //     sort: ["Never", "Rarely", "Sometimes", "Often", "NA"]
        // },
        // y: { aggregate: "count", "type": "quantitative", title: "Frequency" },
        // color: {
        //     field: "binned_age",
        //     type: "ordinal",
        //     title: "Age (binned)"
        // }
    }
}

vegaEmbed("#vis6", work_interfere_age)



var work_interfere_age_filter = {
    title: {
        text: "Distribution of Work Interference of Mental Health Condition by Age"
    },
    height: 300,
    width: 250,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    mark: { type: "bar", tooltip: true, filled: true },
    transform: [{
        filter: "datum.work_interfere !== 'NA' && datum.Age >= 0 && datum.Age <= 80"
    }, {
        bin: true,
        field: "Age",
        as: "binned_age"
    }
    ],
    encoding: {
        x: {
            field: "work_interfere", type: "nominal", title: "Work Interference of Mental Health Condition",
            sort: ["Never", "Rarely", "Sometimes", "Often", "NA"]
        },
        y: { aggregate: "count", "type": "quantitative", title: "Frequency" },
        color: {
            field: "binned_age",
            type: "ordinal",
            scale: {
                domain: [20, 30, 40, 50],
                range: ['#ACE1AF', '#4FFFB0', '#17B169', '#00563B']
            },
            title: "Age (binned)"
            // condition: {
            //     test: "datum.binned_age !== 30 && datum.binned_age !== 20 && datum.binned_age !== 40",
            //     value: "#aaa"
            // }
        }
    }
}

vegaEmbed("#vis7", work_interfere_age_filter)


var treat = {
    title: {
        text: "Number of People who Did and Did Not Seek Treatment",
        //subtitle: "The number of people who sought treatment were almost equal to those who did not seek treatment.",
        subtitleFontSize: 14
    },
    width: 100,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    mark: { type: "bar", tooltip: true },
    transform: [{
        filter: "datum.work_interfere !== 'NA' && datum.Age >= 0 && datum.Age <= 80"
    }, {
        bin: true,
        field: "Age",
        as: "binned_age"
    }
    ],
    encoding: {
        x: { field: "treatment", title: "Country", type: "nominal", sort: "-y" }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
        y: { aggregate: "count", title: "Count of Records" },
        color: {
            field: "binned_age",
            type: "ordinal",
            scale: {
                domain: [20, 30, 40, 50],
                range: ['#ACE1AF', '#4FFFB0', '#17B169', '#00563B']
            },
            title: "Age (binned)"
            // condition: {
            //     test: "datum.binned_age !== 30 && datum.binned_age !== 20 && datum.binned_age !== 40",
            //     value: "#aaa"
            // }
        }
    }
}


vegaEmbed("#vis8", treat)


var mental_physical = {
    title: {
        text: "Mental vs Physical",
        //subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
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

vegaEmbed("#vis9", mental_physical)


// var mental_health_interview = {
//     title: {
//         text: "mental_health_interview",
//         //subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
//         subtitleFontSize: 14
//     },
//     width: 200,
//     data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
//     mark: { type: "bar", tooltip: true },
//     encoding: {
//         x: { field: "mental_health_interview", title: "mental_health_interview", type: "nominal", sort: "-y" }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
//         y: { aggregate: "count", title: "Count of Records" },
//         // color: {
//         //     field: "phys_health_interview",
//         //     type: "nominal",
//         //     scale: {
//         //         domain: ["No", "Maybe", "Yes"],
//         //         range: ['#f03232', '#FF8C00', '#5079a5']
//         //     },
//         //     title: "phys_health_interview"
//         //     // tooltip: { field: "year", type: "temporal" }
//         //     // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
//         // }
//     }
// }
// vegaEmbed("#vis10", mental_health_interview)


// var phys_health_interview = {
//     title: {
//         text: "phys_health_interview",
//         //subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
//         subtitleFontSize: 14
//     },
//     width: 200,
//     data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
//     mark: { type: "bar", tooltip: true },
//     encoding: {
//         x: { field: "phys_health_interview", title: "phys_health_interview", type: "nominal", sort: "-y" }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
//         y: { aggregate: "count", title: "Count of Records" }
//     }
// }
// vegaEmbed("#vis11", phys_health_interview)
// https://vega.github.io/vega-lite/examples/repeat_layer.html


var mental_physical_interview = {
    title: {
        text: "Mental health vs physical health interview",
        //subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
        subtitleFontSize: 14
    },
    "repeat": ["mental_health_interview", "phys_health_interview",
        "mental_health_consequence", "phys_health_consequence"],
    "columns": 2,
    "spec": {
        "width": 200,
        // "height": 200,
        "data": { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
        mark: { type: "bar", tooltip: true },
        "encoding": {
            "x": { "field": { "repeat": "repeat" }, sort: ["Yes", "No", "Maybe"] },
            "y": {
                "aggregate": "count", title: "Frequency",
                "scale": {
                    "domain": [0, 1100]
                  }
            }
        },
    }
}


vegaEmbed("#vis10", mental_physical_interview)



var coworker_supervisor = {
    title: {
        text: "coworker_supervisor",
        //subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
        subtitleFontSize: 14
    },
    "repeat": ["coworkers", "supervisor"],
    "columns": 2,
    "spec": {
        "width": 200,
        // "height": 200,
        "data": { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
        mark: { type: "bar", tooltip: true },
        "encoding": {
            "x": { "field": { "repeat": "repeat" }, sort: ["Yes", "No", "Some of them"] },
            "y": {
                "aggregate": "count", title: "Frequency",
                "scale": {
                    "domain": [0, 800]
                  }
            }
        },
    }
}


vegaEmbed("#vis11", coworker_supervisor)



// var mental_physical = {
//     title: {
//         text: "Mental vs Physical",
//         //subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
//         subtitleFontSize: 14
//     },
//     width: 200,
//     data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
//     mark: { type: "bar", tooltip: true },
//     encoding: {
//         x: { field: "mental_vs_physical", title: "Country", type: "nominal", sort: "-y" }, // , "lt": 2020-01-01, axis: { "labelAngle": 15 },
//         y: { aggregate: "count", title: "Count of Records" },
//         color: {
//             condition: {
//                 test: 'datum["mental_vs_physical"] !== "Don\'t know"',
//                 value: "#aaa"
//             }
//         }
//         // tooltip: { field: "year", type: "temporal" }
//         // tooltip: { aggregate: "count", field: "name" , type: "quantitative" }
//     }
// }

// vegaEmbed("#vis11", mental_physical)



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


// vegaEmbed("#vis5", leave)



var mental_physical = {
    title: {
        text: "Mental vs Physical",
        //subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
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


// vegaEmbed("#vis9", mental_physical)


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
// vegaEmbed("#vis6", no_emp)

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
// vegaEmbed("#vis7", seek_help)

var coworkers = {
    title: {
        text: "Cowowrker",
        subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
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
// vegaEmbed("#vis8", coworkers)


var supervisor = {
    title: {
        text: "Supervisors",
        subtitle: "A majority of people were unsure whether their employer takes mental health as seriously as physical health.",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
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


// vegaEmbed("#vis9", supervisor)

