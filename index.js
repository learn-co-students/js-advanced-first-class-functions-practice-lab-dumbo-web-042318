function logDriverNames(drivers) {
  drivers.forEach(function(driver, i, arr) {
    console.log(driver.name)
    console.log(i)
    console.log(arr)
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if(driver.hometown === hometown) {
      console.log(driver.name)
    }
  });
}

function driversByRevenue(drivers) {
  let sortedByRevenue = [...drivers];

  sortedByRevenue.sort(function(a, b) {
    return a.revenue - b.revenue
  });
  return sortedByRevenue
}

function driversByName(drivers) {
  let sortedByName = [...drivers]

  sortedByName.sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
  return sortedByName
}

function totalRevenue(drivers) {
  return drivers.reduce(function (agg, el){
    return agg + el.revenue
  }, 0)
}

function averageRevenue(drivers) {
  console.log(totalRevenue(drivers))
  return (totalRevenue(drivers) / 5)

}
