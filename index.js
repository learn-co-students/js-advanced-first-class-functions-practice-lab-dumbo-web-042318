// * `logDriverNames()` — Receives an array of `driver` objects and logs the `name` attribute of each `driver` to the console.
const logDriverNames = function(drivers){
  return drivers.map(driver => console.log(driver.name));
}
// logDriversByHometown()
// logs the name of each driver whose hometown matches the passed-in argument
const logDriversByHometown = function(drivers, location){
 drivers.filter(driver => driver.hometown === location).map(driver => console.log(driver.name));
}

// driversByRevenue()
// uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)
const driversByRevenue = function (drivers){
  const newArray = drivers.slice();
  newArray.sort(function (a, b){
    return a.revenue - b.revenue;
  });
  return newArray;
}

// driversByName()
// uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z)

const driversByName = function(drivers){
  const newArray = drivers.slice();
      newArray.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
      });
return newArray;

}
// * `totalRevenue()` — Receives an array of `driver` objects and returns the sum of the revenue earned by each driver.

const totalRevenue = function(drivers){
  const total = drivers.reduce(function (acc, driver) {
      return acc + driver.revenue;
  },0);
return total;
}

// * `averageRevenue()` — Receives an array of `driver` objects and returns the average revenue earned by each driver.
  const averageRevenue = function(drivers){
    const avg = totalRevenue(drivers)/drivers.length;
    return avg;
  }
