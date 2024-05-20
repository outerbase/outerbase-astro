export interface PartyType {
    id: number;
    name: any;
    food: any;
}

export class Party implements PartyType {
    id: number;
    name: any;
    food: any;
    
    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.food = data.food;
    }
}