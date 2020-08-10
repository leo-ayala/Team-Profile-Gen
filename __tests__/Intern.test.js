const Intern = require('../lib/Intern')

test('checks for a name', () => {
    const intern = new Intern('Leo', 456, 'leo@leo.com', 'Intern');
    expect(intern.getName()).toBe('Leo')
});

test('checks for an id', () => {
    const intern = new Intern('Leo', 456, 'leo@leo.com', 'Intern');
    expect(intern.getId()).toEqual(expect.any(Number));

});

test('checks for an email', () => {
    const intern = new Intern('Leo', 456, 'leo@leo.com', 'Intern');
    expect(intern.getEmail()).toEqual(expect.any(String))

});

test('checks for a role', () => {
    const intern = new Intern('Leo', 456, 'leo@leo.com', 'Intern');
    expect(intern.getRole()).toBe('Intern')

});
