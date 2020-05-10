class Person {
    private _name: string;

    get name(): string {
        return "Dear " + this._name;
    }
    set name(name: string) {
        this._name = name;
    }

    personMethod() {
        console.log("Person method has been called.");
    }
}

class Customer extends Person {
    customerMethod() {
        console.log("Customer method has been called.");
    }
}

class Personel extends Person {
    personelMethod() {
        console.log("Personel method has been called.");
    }
}

let customer = new Customer();
customer.personMethod();
customer.customerMethod();
customer.name = "Negan";
console.log(customer.name);

let personel = new Personel();
personel.personMethod();
personel.personelMethod();