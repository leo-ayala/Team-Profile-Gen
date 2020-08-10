const Employee = require('../lib/Employee')

test('create an employee object', () => {
    const employee = new Employee('Leo', 456, 'leo@leo.com', 'Employee');
    
    expect(employee.name).toBe('Leo');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('checks for a name', () => {
    const employee = new Employee('Leo', 456, 'leo@leo.com', 'Employee');

});

test('checks for an id', () => {
    const employee = new Employee('Leo', 456, 'leo@leo.com', 'Employee');

});

test('checks for an email', () => {
    const employee = new Employee('Leo', 456, 'leo@leo.com', 'Employee');

});

test('checks for a role', () => {
    const employee = new Employee('Leo', 456, 'leo@leo.com', 'Employee');

});



