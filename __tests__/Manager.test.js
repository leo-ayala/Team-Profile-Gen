const Manager = require('../lib/Manager')

test('checks for a name', () => {
    const manager = new Manager('Leo', 456, 'leo@leo.com', 'Manager');
    expect(manager.getName()).toBe('Leo')
});

test('checks for an id', () => {
    const manager = new Manager('Leo', 456, 'leo@leo.com', 'Manager');
    expect(manager.getId()).toEqual(expect.any(Number));

});

test('checks for an email', () => {
    const manager = new Manager('Leo', 456, 'leo@leo.com', 'Manager');
    expect(manager.getEmail()).toEqual(expect.any(String))

});

test('checks for a role', () => {
    const manager = new Manager('Leo', 456, 'leo@leo.com', 'Manager');
    expect(manager.getRole()).toBe('Manager')

});