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
 
 
  if( item.enhancement < 15) {
    return {
      ...item,
      durability: item.durability - 5
    }
  } else if ( item.enhancement === 15 ) {
    return {
      ...item,
      durability: item.durability- 10
    }
  } else if ( item.enhancement >= 16 ) {
    return {
      ...item,
      durability: item.durability - 10,
      enhancement: --item.enhancement
    }
  }
 
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
