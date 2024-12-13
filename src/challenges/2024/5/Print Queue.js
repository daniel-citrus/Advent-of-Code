const order = extractOrder(require('./inputs/testRules.txt'));
const updates = extractUpdates(require('./inputs/testUpdates.txt'));

// store order into map
function extractOrder(orders) {
    const orderMap = new Map();
    orders = orders.split('\n');

    for (let o in orders) {
        const order = orders[o];
        orders[o] = order.replace('\r', '').split('|');

        if (orderMap.has(orders[o][0])) {
            orderMap.get(orders[o][0]).push(orders[o][1]);
        } else {
            orderMap.set(orders[o][0], [orders[o][1]]);
        }
    }

    return orderMap;
}

function extractUpdates(updates) {
    updates = updates.split('\n');

    for (let u in updates) {
        const update = updates[u];

        updates[u] = update.replace('\r', '').split(',');
    }

    return updates;
}

