const Employee = require('../lib/Employee')

test('create an employee object', () => {
    const employee = new Employee('Leo', 456, 'leo@leo.com');
    
    expect(employee.name).toBe('Leo');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});



