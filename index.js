
function logDriverNames(drivers) {
drivers.forEach(driver => console.log(driver.name))

}

function logDriversByHometown(drivers, location) {
  // drivers.forEach(driver =>
  //   if (driver.hometown === location) {
  //   console.log(driver.name)
  // };)
  // for (const driver in drivers) {
  //   debugger;
  //   if (driver.hometown === location) {
  //     debugger;
  //     console.log(driver.name)
  //   }
  // }
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
	     console.log(driver.name);
    }
  })

}


function driversByRevenue(drivers) {
  let driversCopy = drivers.slice().sort(function(a, b) {
      return a.revenue - b.revenue})

      return driversCopy;

}


function driversByName(drivers) {
  let driversCopy = drivers.slice().sort(function(a, b) {
      return a.name.localeCompare(b.name)})

      return driversCopy;

}

// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.

function totalRevenue(drivers) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let rev = drivers.map(driver => driver.revenue)
  return rev.reduce(reducer)

}

// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.

function averageRevenue(drivers) {
let nums = totalRevenue(drivers)
return nums / drivers.length;


}
