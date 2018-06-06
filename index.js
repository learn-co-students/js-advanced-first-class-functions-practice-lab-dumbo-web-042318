// Code your solution in this file!
const logDriverNames = function (drivers) {
  for(const driver of drivers) {
    console.log(driver.name);
  }
}

const logDriversByHometown = function (drivers, location) {
  for(const driver of drivers) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  }
}

const driversByRevenue = function (drivers) {
  let newArray = [...drivers];
  newArray.sort(function (a, b) {
      return a.revenue - b.revenue;
    })
  return newArray;
}

const driversByName = function (drivers) {
  let newArray = [...drivers];
  newArray.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
  return newArray;
}

const totalRevenue = function (drivers) {
  let totalResult = 0;
  drivers.forEach(function (driver) {
    totalResult += driver.revenue;
  });
  return totalResult;
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/drivers.length;
}
