export class User {
    _id?: number;
    id: string;
    name: string;
    age: string;
    password: string;

    constructor(id: string, name: string, age: string, password: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.password = password;
    }   
}
