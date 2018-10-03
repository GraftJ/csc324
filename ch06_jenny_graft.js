console.log("Jenny Graft");
console.log("Chapter 6 Homework");

console.log("Group");

class Group {
    constructor() {
        this.members = [];
    }

     //needs to check whether it needs to add it to the array or if it is already there.

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    //deletes the number given and then creat a new array.

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    has(value) {
        return this.members.includes(value);
    }

    //creats a new group

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));