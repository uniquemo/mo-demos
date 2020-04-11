// import { name } from './a.js'

// console.log('name => ', name)
// console.log(import)
import('./a.js')
  .then(name => {
    console.log(name)
  })
