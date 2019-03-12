//logic holds if/else statements.. 


module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement<20) {
    const newItem = {...item}
    newItem.enhancement = newItem.enhancement + 1
    return newItem
  } else {
const newItem = {...item}
return newItem
}
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const repairItem = {
      ...item,
      durability:100
  }
  return repairItem
}

function get(item) {
  return { ...item };
}
