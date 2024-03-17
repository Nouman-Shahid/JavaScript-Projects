// Asynchronous and Synchronous

let product = (a,b) =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(a*b)
        resolve("success")
        
      }, 2000);
    })
}

(async function calSum () {
  await product(3,4)
  await product(3,5)
  await product(3,6)
}) ()