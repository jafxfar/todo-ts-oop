import type Category from "./Category";
import type Urgent from "./Urgent";
export default class Task {
    id: number;
    name: string;
    isCompleted: boolean;
    category: Category | null = null;
    urgent: Urgent | null = null;

    constructor(id: number, name: string, category: Category, urgent: Urgent, isCompleted: boolean = false) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
        this.category = category;
        this.urgent = urgent;
    }
    toggle() {
        this.isCompleted = !this.isCompleted;
    }
    rename(newName: string) {
        this.name = newName;
    }
}