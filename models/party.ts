import { BaseTable, Column } from '@outerbase/sdk';

export class Party extends BaseTable {
    @Column({ name: "id", primary: true })
    id: number;

    @Column({ name: "name" })
    name: any;

    @Column({ name: "food" })
    food: any;

    
    constructor(data: any) {
        super({
            _name: "party",
            _schema: "public"
        });

        this.id = data.id;
        this.name = data.name;
        this.food = data.food;
    }
}