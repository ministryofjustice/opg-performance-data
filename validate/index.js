'use strict';

const fs = require('fs');
const documentsToCheck = ["./use-an-lpa/data.json", "./make-a-lpa/data.json"];

documentsToCheck.forEach(value => {
    const data = fs.readFileSync(value);
    const parsedData = JSON.parse(data);

    const duplicateDataSet = parsedData.map(v => v._timestamp + v.dataType);
    const isDuplicate = duplicateDataSet.some((item, index) => index !== duplicateDataSet.indexOf(item));

    if (isDuplicate) {
        console.error(`JSON in ${value} has one or more entries with the same _timestamp and dataType. These need to be unique.`);
        process.exit(1)
    }
})
