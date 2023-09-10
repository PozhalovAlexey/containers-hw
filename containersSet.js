class Team {
    constructor() {
        this.members = new Set();
    }

    add(member) {
        if (this.members.has(member)) {
            console.error(`${member} уже есть в коллекции!`)
        }
        this.members.add(member)
    }

    addAll(...members) {
        members.forEach(member => this.members.add(member))
    }

    toArray() {
        return Array.from(this.members)
    }
}