'use strict';

const fs = require('fs');

const documentsToCheck = [
    "./src/_data/use_a_lasting_power_of_attorney_service/data.json",
    "./src/_data/make_a_lasting_power_of_attorney_service/data.json",
    "./src/_data/complete_the_deputy_report_service/data.json"
];

function isNumber(value) {
  return typeof value === 'number';
}

function isValidEntry(entry) {
    const requiredFields = ["_timestamp", "service", "channel", "count", "dataType", "period"];

    for (const requiredField of requiredFields) {
        if (!(requiredField in entry)) {
            return [`Missing required field: ${field}`];
        }
    }

    const errors = [];

    if (typeof entry._timestamp !== 'string') errors.push("_timestamp must be a string");
    if (typeof entry.service !== 'string' || !/^[a-zA-Z\-]+$/.test(entry.service)) errors.push("Key 'service' must be combo of letters and dashes only");
    if (typeof entry.channel !== 'string') errors.push("Key channel must be a string");
    if (typeof entry.count !== 'number') errors.push("Key count must be a number");
    if (typeof entry.dataType !== 'string' || !/^[a-zA-Z\-]+$/.test(entry.dataType)) errors.push("Key 'dataType' must be combo of letters and dashes only");
    if (typeof entry.period !== 'string' || !["year", "month", "week", "day"].includes(entry.period)) errors.push("period must be 'year', 'month', 'week', or 'day'");

    return errors;
}

documentsToCheck.forEach(file => {
    const raw = fs.readFileSync(file);
    const data = JSON.parse(raw);

    const timeAndTypeCombinedKeys = new Set();
    let isValid = true;
    // ===== An entry is a json dict in the array and looks like this =====
    //     {
    //        "_timestamp": "2024-01-01T00:00:00+00:00",
    //        "service": "example-service",
    //        "channel": "digital",
    //        "count": 20,
    //        "dataType": "very-dissatisfied",
    //        "period": "month"
    //     }
    data.forEach((entry, entryIndex) => {
        const key = entry._timestamp + entry.dataType;
        if (timeAndTypeCombinedKeys.has(key)) {
            console.error(`🔥 Duplicate _timestamp + dataType in ${file} at entry ${entryIndex}`);
            isValid = false;
        } else {
            timeAndTypeCombinedKeys.add(key);
        }

        const errors = isValidEntry(entry);
        if (errors.length > 0) {
            console.error(`🔥 Entry ${entryIndex} in ${file} is invalid:`);
            errors.forEach(err => console.error("   " + err));
            isValid = false;
        }
    });

    if (isValid) {
        console.log(`🙌 ${file} is valid.`);
    } else {
        process.exit(1);
    }
});
