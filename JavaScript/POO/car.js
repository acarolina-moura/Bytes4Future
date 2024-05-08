class Car {
    constructor (brand, color, model, price, bhp){
        this.brand = brand; 
        this.color = color;
        this.model = model;
        this.price = price;
        this.bhp = bhp;   
    }

    get getBrand(){
        return this.brand;
    }
}

let myCar = new Car("Ferrari","red", "F40", 13, 570);


console.log(myCar.brand);