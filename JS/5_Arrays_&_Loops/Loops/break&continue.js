// Break lets us stop a loop early, or break out of a loop.
// Continue is used to skip one iteration ot the current iteration


for (let i = 0; i <= 10; i++) {
  if (i == 5) break //exits loop when the value of i is 5.
  console.log(i)
}

console.log("********************************")

for (let i = 0; i <= 10; i++) {
  if (i == 5) continue
  console.log(i)
}