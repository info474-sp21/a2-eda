// Main JavaScript File

var age = {
    title: {
        text: "Distribution of Age"
    },
    height: 300,
    width: 250,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    mark: { type: "point", tooltip: true, filled: true },
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
    mark: { type: "point", tooltip: true, filled: true },
    transform: [{
        filter: "datum.Age > 1 && datum.Age < 100"
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
            field: "work_interfere", 
            type: "nominal", 
            title: "Work Interference of Mental Health Condition",
            sort: ["Never", "Rarely", "Sometimes", "Often", "NA"],
            axis: { labelAngle: 0}
        },
        y: { aggregate: "count", title: "Frequency" },
        opacity: {
            condition: {
                test: "datum.work_interfere !== 'NA'",
                value: 0.3
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
            field: "work_interfere", 
            type: "nominal",
            title: "Work Interference of Mental Health Condition",
            sort: ["Never", "Rarely", "Sometimes", "Often", "NA"],
            axis: { labelAngle: 0}
        },
        y: { aggregate: "count", title: "Frequency" }
    }
}
vegaEmbed("#vis5", work_interfere_filter)


var work_interfere_age = {
    title: {
        text: "Distribution of Work Interference of Mental Health Condition by Age"
    },
    height: 400,
    width: 800,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    transform: [{
        filter: "datum.work_interfere !== 'NA' && datum.Age > 0 && datum.Age < 80"
    }, {
        bin: true,
        field: "Age",
        as: "binned_age"
    }
    ],
    encoding: {
        y: {
            aggregate: "count",
            title: "Frequency"
        },
        x: {
            field: "binned_age",
            title: "Age (binned)",
            axis: { labelAngle: 0, labelFontSize: 12}
        },
        color: {
            field: "work_interfere",
            title: "Work Interference"
        }
    },
    "layer": [{
        mark: { type: "point", tooltip: true },
    }, {
        "mark": {
            "type": "text",
            "align": "left",
            "baseline": "middle",
            "xOffset": 10
        },
        "encoding": {
            "text": { "field": "work_interfere"},
            color: {
                value: "black",
            },
        }
    }]
}
vegaEmbed("#vis6", work_interfere_age)


var treat_age = {
    title: {
        text: "Number of People who Did and Did Not Seek Treatment by Age"
    },
    height: 400,
    width: 800,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    transform: [{
        filter: "datum.Age > 0 && datum.Age < 80 && datum.work_interfere !== 'NA'"
    }, {
        bin: true,
        field: "Age",
        as: "binned_age"
    }
    ],
    "encoding": {
        "color": {
            "field": "treatment",
            "type": "nominal",
            title: "Sought Treatment?"
        }
    },
    "layer": [{
        "mark": { type: "line", tooltip: true },
        "encoding": {
            "x": { "field": "binned_age", "title": "Age (binned)", axis: { labelAngle: 0, labelFontSize: 12} },
            "y": { aggregate: "count", "type": "quantitative", "title": "Frequency" }
        }
    }, {
        "encoding": {
            "x": { "aggregate": "max", "field": "binned_age", "axis": false },
            y: { "aggregate": { "argmax": "binned_age" } },
        },
        "layer": [
            {
                "mark": {
                    "type": "circle",
                    xOffset: -48,
                    yOffset: 195
                    // xOffset: {"expr": "datum.treatment === 'Yes' ? -50 : -35"},
                    // yOFfset: {"expr": "datum.treatment === 'Yes' ? 198 : 197"}
                },
                encoding: {
                    size: { value: 140 }
                }
            },
            {
                "mark": {
                    "type": "text",
                    // xOffset: {"expr": "datum.treatment === 'Yes' ? -50 : -35"},
                    // yOFfset: {"expr": "datum.treatment === 'Yes' ? 180 : 180"}
                    xOffset: -40,
                    yOffset: 180
                },
                "encoding": {
                    "text": { "field": "treatment", "type": "nominal" },
                    size: { value: 18 }
                }
            }
        ]
    }],
}


vegaEmbed("#vis7", treat_age)


var mental_physical = {
    title: {
        text: "Mental vs Physical",
        subtitleFontSize: 14
    },
    width: 200,
    data: { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
    transform: [{
        filter: "datum.Age > 0 && datum.Age < 80 && datum.work_interfere !== 'NA'"
    }
    ],
    mark: { type: "bar", tooltip: true },
    encoding: {
        x: {
            field: "mental_vs_physical",
            title: "Employer views Mental Health as Serious as Physical Health",
            type: "nominal", sort: "-y",
            axis: { labelAngle: 0, labelFontSize: 12, titleFontSize: 12 }
        }, 
        y: { aggregate: "count", title: "Count of Records" },
        opacity: {
            condition: {
                test: 'datum["mental_vs_physical"] !== "Don\'t know"',
                value: 0.3
            }
        }
    }
}

vegaEmbed("#vis8", mental_physical)


var mental_physical_interview = {
    title: {
        text: "Mental health vs physical health interview and consequences",
        fontSize: 15,
        dx: 50
    },
    "repeat": ["mental_health_interview", "phys_health_interview",
        "mental_health_consequence", "phys_health_consequence"],
    "columns": 2,
    "spec": {
        "width": 200,
        "data": { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
        transform: [{
            filter: "datum.Age > 0 && datum.Age < 80 && datum.work_interfere !== 'NA'"
        }
        ],
        mark: { type: "bar", tooltip: true },
        "encoding": {
            "x": { "field": { "repeat": "repeat" }, sort: ["Yes", "No", "Maybe"], axis: { labelAngle: 0, labelFontSize: 12}},
            "y": {
                "aggregate": "count", title: "Frequency",
                "scale": {
                    "domain": [0, 1100]
                }
            },
            opacity: {
                condition: {
                    test: "datum.mental_health_interview !== 'No' && datum.phys_health_interview !== 'Maybe' && datum.mental_health_consequence !== 'No' && datum.phys_health_consequence != 'No'",
                    value: 0.3
                }
            }
        },
    }
}


vegaEmbed("#vis9", mental_physical_interview)


var company_support = {
    title: {
        text: "Company Support and Resources for Mental Health",
        dx: 200,
        dy: -10,
        fontSize: 15
    },
    "repeat": ["benefits", "seek_help", "wellness_program"],
    "columns": 3,
    "spec": {
        "width": 200,
        "data": { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
        transform: [{
            filter: "datum.Age > 0 && datum.Age < 80 && datum.work_interfere !== 'NA'"
        }
        ],
        mark: { type: "bar", tooltip: true },
        "encoding": {
            "x": {
                "field": { "repeat": "repeat" },
                sort: ["Yes", "No", "Don\'t know"],
                axis: { "labelAngle": 0, labelFontSize: 12, titleFontSize: 13 }
            },
            "y": {
                "aggregate": "count", title: "Frequency",
                "scale": {
                    "domain": [0, 900]
                }
            },
            opacity: {
                condition: {
                    test: "datum.benefits !== 'Yes' && datum.wellness_program !== 'No' && datum.seek_help !== 'No'",
                    value: 0.3
                }
            }
        },
    }
}
vegaEmbed("#vis10", company_support)





var coworker_supervisor = {
    title: {
        text: "Likelihood of Discussing Mental Health Issue with Coworkers vs Supervisor",
        fontSize: 15
    },
    "repeat": ["coworkers", "supervisor"],
    "columns": 2,
    "spec": {
        "width": 200,
        "data": { "url": "https://raw.githubusercontent.com/info474-sp21/a2-eda/main/data/survey.csv" },
        transform: [{
            filter: "datum.Age > 0 && datum.Age < 80 && datum.work_interfere !== 'NA'"
        }
        ],
        mark: { type: "bar", tooltip: true },
        "encoding": {
            "x": {
                "field": { "repeat": "repeat" },
                sort: ["Yes", "No", "Some of them"],
                axis: { "labelAngle": 0, labelFontSize: 12, titleFontSize: 13 }
            },
            "y": {
                "aggregate": "count", title: "Frequency",
                "scale": {
                    "domain": [0, 800]
                }
            },
            "opacity": {
                condition: {
                    test: "datum.coworkers !== 'Some of them' && datum.supervisor !== 'Yes'",
                    value: 0.3
                }
            }
        },
    }
}

vegaEmbed("#vis11", coworker_supervisor)