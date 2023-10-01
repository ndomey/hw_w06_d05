const names = ["Fred", "Kate", "Cindy", "Ricky", "Keith"]
console.log(names)

// const fred = names[0]
// const kate = names[1]
// console.log(kate)

// const [fred, kate] = names
// console.log(kate)

// const [fred, kate, , ricky] = names
// console.log(ricky)

const [fred, kate, ...remainingNames] = names
console.log(remainingNames)