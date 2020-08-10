const fs = require('fs')

// createManager(manager) {
// let text = 
// `
// <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${name}</h5>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Employee ID# ${id}</li>
//     <li class="list-group-item">Email: ${email}</li>
//   </ul>
// </div>
// `
// }

// createIntern(intern) {
//   let text = 
//   `
//   <div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">${intern.name}</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">Employee ID# ${intern.id}</li>
//       <li class="list-group-item">Email: ${intern.email}</li>
//       <li class="list-group-item">School: ${intern.school}</li>
//     </ul>
//   </div>
//   `
//   };



// return`{
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css
//     /bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0
//     hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">  
//     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj
//     /zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/pop
//     per.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbG
//     U+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
//     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/
//     bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57Bagh
//     qFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>  
//     <title>Team Setup</title>
// </head>
// <body>
//     ${createManager()}
//     ${createIntern()}
//     ${createEngineer()}
// </body>
// </html>
// }

class generatePage {
  constructor (employees) {
    this.employee = employees
  }
}


module.exports = generatePage