let obj = {
  name: "Nayan",
  age: 23,
  isMarried: false,
  address: 'Earth',
  money: null
}

// This is a simple object. Now lets see what can be kept inside an object as well.

// We can keep an object inside an object

let second = {
  name: 'Ujjwal',
  address: {
    country: 'Zigzag',
    province: 0,
    district: 'Hehe'
  }
}

// we can even keep a function inside an object. Functions are also first class object in JS.

let third = {
  name: 'ujjwal',
  age: 23,
  canVote: (age) => age > 18 ? "Yes! He can vote." : "No! He can't vote.",
  info: function () {
    console.log('Hello! My name is ' + (this.name) + ' and my age is ' + third.age)
  }
}
console.log(third.canVote(third.age))
third.info()
