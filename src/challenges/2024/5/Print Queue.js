const order = require('./inputs/rules.txt');
const updates = require('./inputs/updates.txt');

// store order into map
function extractRules(rules) {
    const ruleMap = new Map();
    rules = rules.split('\n');

    for (let o in rules) {
        const rule = rules[o];
        rules[o] = rule.replace('\r', '').split('|');

        if (ruleMap.has(rules[o][0])) {
            ruleMap.get(rules[o][0]).push(rules[o][1]);
        } else {
            ruleMap.set(rules[o][0], [rules[o][1]]);
        }
    }

    return ruleMap;
}

function extractUpdates(updates) {
    updates = updates.split('\n');

    for (let u in updates) {
        const update = updates[u];

        updates[u] = update.replace('\r', '').split(',');
    }

    return updates;
}

module.exports = { extractRules, extractUpdates };
