const { extractRules, extractUpdates } = require('./Print Queue');

function valid(update, rules) {
    rules = extractRules(rules);

    const memory = new Set();
    for (let u of update) {
    }
}

module.exports = valid;
