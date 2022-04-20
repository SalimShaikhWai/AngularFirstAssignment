export class Book{
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    constructor(private _title: string,private _name: string)
    {

    }
}


export class Pizza
{
    public get pizzType(): string {
        return this._pizzType;
    }
    public set pizzType(value: string) {
        this._pizzType = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get pizzName(): string {
        return this._pizzName;
    }
    public set pizzName(value: string) {
        this._pizzName = value;
    }
    constructor(private _pizzName: string,private _price: number,private _pizzType: string)
    {

    }
}