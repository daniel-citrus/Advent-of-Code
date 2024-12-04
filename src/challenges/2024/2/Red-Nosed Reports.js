import reports from './input.txt';

// Answer
/* console.log(countValid(reports)); */

function countValid(reports) {
    reports = cleanReports(reports);

    let validCount = 0;
    for (let report of reports) {
        if (valid(report)) {
            validCount++;
        }
    }

    return validCount;
}

// store reports and levels in 2D array
// convert levels to integer
function cleanReports(reports) {
    reports = reports.split(/\r/);

    const cleaned = [];

    for (let report of reports) {
        report = report.replace(/\n/, '');
        report = report.split(' ');
        report = report.map((level) => +level);
        cleaned.push(report);
    }

    return cleaned;
}

// report has ascending or descending levels
// adjecent levels differ by atleast 1 and less than 3
function valid(report) {
    return moving(report) && gradual(report);
}

// report is increasing or decreasing
function moving(report) {
    let prev = null;
    let increasing = null;

    for (let level of report) {
        if (prev === null) {
            prev = level;
            continue;
        }

        if (level < prev) {
            if (increasing === true) {
                return false;
            }

            increasing = false;
        } else if (level > prev) {
            if (increasing === false) {
                return false;
            }

            increasing = true;
        } else {
            return false;
        }

        prev = level;
    }

    return true;
}

// check if report levels increase or decrease by 1 through 3
function gradual(report) {
    let prev = null;

    for (let level of report) {
        if (prev === null) {
            prev = level;
            continue;
        }

        const diff = Math.abs(prev - level);

        if (diff < 1 || diff > 3 || diff === 0) {
            return false;
        }

        prev = level;
    }

    return true;
}

/* module.exports = { moving, gradual, valid }; */
