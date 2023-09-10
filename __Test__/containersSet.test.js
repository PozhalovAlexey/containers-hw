const team = new Team()
test('add', () => {
    team.add('John');
    expect(team.members.size).toBe(1);
});

test('toArray', () => {
    team.addAll('John', 'Alice', 'Bob');
    expect(team.toArray()).toEqual(['John', 'Alice', 'Bob'])
}