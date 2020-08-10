const Engineer = require('../lib/Engineer')

test('checks for a name', () => {
    const engineer = new Engineer('Leo', 456, 'leo@leo.com', 'Engineer');
    expect(engineer.getName()).toBe('Leo')
});

test('checks for an id', () => {
    const engineer = new Engineer('Leo', 456, 'leo@leo.com', 'Engineer');
    expect(engineer.getId()).toEqual(expect.any(Number));

});

test('checks for an email', () => {
    const engineer = new Engineer('Leo', 456, 'leo@leo.com', 'Engineer');
    expect(engineer.getEmail()).toEqual(expect.any(String))

});

test('checks for a role', () => {
    const engineer = new Engineer('Leo', 456, 'leo@leo.com', 'Engineer');
    expect(engineer.getRole()).toBe('Engineer')

});