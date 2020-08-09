// const Questions = require('./lib/Questions')
// new Questions().generate();
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const inquirer = require("inquirer")

var employees = []

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        }
    ]);
}

promptUser()
    .then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employees.push(manager);
    })
    .then(() => {
        // getTeamData()
        console.log(employees)
    });