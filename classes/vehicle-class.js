
'use strict';

class Vehicle{
    constructor(name , wheels){
        this.name = name ;
        this.wheels = wheels
    }

    drive(){
        return 'Moving Forward';
    }

    stop(){
        return 'stopping'
    }
}

class Car extends Vehicle {
    constructor(name ,wheels){
        super(name ,4)
    }

    run(){
        super.drive();
        super.stoop();
    }

}

class Motorcycle extends Vehicle{
constructor(name ,wheels){
    super(name, 2);
}

    wheelie(){
        return 'Wheeel' ;
    }

    run(){
        super.drive() ;
        super.stop();
    }
}
module.exports = {Car , Motorcycle};


