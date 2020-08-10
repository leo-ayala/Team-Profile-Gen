

class generatePage {
  constructor (employees) {
    this.employee = employees
    this.html = '';
    console.log(this.employee)
  }
  getPage() {
    return this.html
  }
  makePage() {

    this.html += `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">   
    <title>Team Setup</title>
    </head>
    <body>`;

    this.createManager(this.employee[0]);
    for (let i = 0; i < this.employee.length; i++) {
      if (this.employee[i].getRole() === 'Intern') {
        this.createIntern(this.employee[i])
      } 
    };
    for (let i = 0; i < this.employee.length; i++) {
      if (this.employee[i].getRole() === 'Engineer') {
        this.createEngineer(this.employee[i])
      } 
    };

    this.html += `
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script> 
    </body>
    </html>
    `;
  }

  createManager(manager) {
    let text = 
    `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID# ${manager.id}</li>
        <li class="list-group-item">Email: ${manager.email}</li>
        <li class="list-group-item">Email: ${manager.officeNumber}</li>
      </ul>
    </div>
    `;
    this.html += text;
    }
    
    createIntern(intern) {
      let text = 
      `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID# ${intern.id}</li>
          <li class="list-group-item">Email: ${intern.email}</li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
      `;
      this.html += text;
      }

      createEngineer(engineer) {
        let text = 
        `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID# ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">School: ${engineer.github}</li>
          </ul>
        </div>
        `;
        this.html += text;
        }

}


module.exports = generatePage