// Async - Makes a function return a promise.
// Await - makes an async function wait for a promise

// It allows us to write asynchronous code in synchronous manner. Async doesnt have a resolve or reject parameters. Everything after await is placed in an event queue.

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true

      if (dogWalked) {
        resolve("You walk the dog.")
      }
      else {
        reject('You didnt walk the dog.')
      }
    }, 1500)
  })
}



// The above function returns a promise with resolve and reject.
// We can use async before that function, but since async doesnt have a resolve and reject. So we should use async and await both.

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanKitchen = false

      if (cleanKitchen) {
        resolve("You cleaned the kitchen.")
      }
      else {
        reject('You didnt clean the kitchen.')
      }
    }, 1500)
  })
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const takeTrashOut = true

      if (takeTrashOut) {
        resolve("You took the trash out.")
      }
      else {
        reject('You didnt took the trash out.')
      }
    }, 1500)
  })
}

async function doChores() {
  const walkDogResult = await walkDog()
  console.log(walkDogResult)

  const cleanKitchenResult = await cleanKitchen()
  console.log(cleanKitchenResult)

  const takeTrashOutResult = await takeOutTrash()
  console.log(takeTrashOutResult)
}

doChores()