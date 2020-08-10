const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require("inquirer")
const generatePage = require('./src/page-template')


var employees = []

function firstMessage() {
    console.log('Please enter infromation about yourself')
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

function makeEngineer() {
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
            name: 'github',
            message: 'What is your Github name?'
        }
    ]);
}

function makeIntern() {
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
            name: 'school',
            message: 'What is the name of your school?'
        }
    ]);
}

function teamMembers() {
  console.log('Please enter information about your team members');
    return inquirer.prompt(
        {
            type:'list',
            name: 'type',
            choices: ['Intern', 'Engineer', 'Done']
        }
    ) .then(choice => {
        if (choice.type == 'Engineer') {
            makeEngineer().then(answers => {
                let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                employees.push(engineer)
                teamMembers()
            })
        } else if (choice.type == 'Intern') {
            makeIntern().then(answers => {
                let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                employees.push(intern)
                teamMembers()
            })
        } else {
            makePage()
        }
    })
}

function makePage(employees) {
    const pageHTML = new generatePage(employees);
            
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) {
        console.log(err);
        return;
    }
        console.log('Page created! Check out index.html in this directory to see it!');
    });
}

firstMessage()
    .then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employees.push(manager);
    })
    .then(() => {
         teamMembers()
    });

