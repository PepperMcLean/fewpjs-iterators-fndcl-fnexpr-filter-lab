// Code your solution here
function findMatching(drivers, driver) {
  return drivers.filter( maybeDriver => maybeDriver.toLowerCase() === driver.toLowerCase()
  )
}

function fuzzyMatch(drivers, firstLetter) {
  return drivers.filter( maybeDriver => maybeDriver.toLowerCase().indexOf(firstLetter.toLowerCase()) === 0)
}

function matchName(drivers, driver) {
  return drivers.filter( maybeDriver => maybeDriver.name === driver)
}