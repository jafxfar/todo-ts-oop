export default class Task {
    id: number;
    name: string;
    isCompleted: boolean;

    constructor(id: number, name: string, isCompleted: boolean = false) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
    }
    toggle() {
        this.isCompleted = !this.isCompleted;
    }
    rename(newName: string) {
        this.name = newName;
    }
}