function logDriverNames(array) {
    array.forEach(element => {
        console.log(element.name)
    });
}

function logDriversByHometown(array, hometown) {
    array.forEach(element => {
        if (element.hometown === hometown) {
            console.log(element.name)
        }
    })
}

function driversByRevenue(array) {
    const revenueSortArray = array.slice().sort(function(a, b) {
        return a.revenue - b.revenue
    })
    return revenueSortArray
}

function driversByName(array) {
    const sortedByName = array.slice().sort(function(a, b) {
        return a["name"].localeCompare(b["name"])
    })
    return sortedByName
}

function totalRevenue(array) {
    const sum = array.reduce(function(acc, driver) {
        return acc + driver.revenue
    }, 0)
    return sum
}

function averageRevenue(array) {
    const sum = totalRevenue(array)
    return sum / array.length
}