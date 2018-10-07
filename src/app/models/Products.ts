export class Product{
    name:string;
    image:string;
    price:number;
    currency:string;
    constructor(image:string,name:string,price:number,currency:string){
        this.image=image;
        this.name=name;
        this.price=price;
        this.currency=currency;
    }
}