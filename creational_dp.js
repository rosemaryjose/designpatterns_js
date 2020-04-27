class Person {
    constructor(name='unnamed person')  {
        this.name = name;
    }
}
class Shopper extends Person {
    constructor(name, money=0) {
        super(name);
        this.money = money;
        this.employed = false;
    }
}
class Employee extends Shopper {		
    constructor(name, money=0, employer='') {
        if(Employee.instance instanceof Employee){
        	console.log('Already initialized');
        	return Employee.instance;        	
        }
        super(name, money);
        this.employerName = employer;
        this.employed = true;
        Employee.instance = this;
    }
}
class PersonFactory {
    createPerson(type) {
        switch(type) {
            case 'shopper':
                return new Shopper('Alex Banks',100)
            case 'employee':
                return new Employee('Eve Porcello',100)
        }
  	}
}
const factory = new PersonFactory();
const alex = factory.createPerson('shopper')
const eve = factory.createPerson('employee')
console.log(alex)
console.log(eve)
const rose = factory.createPerson('employee')
console.log(rose)
console.log(eve===rose)
console.log(eve==rose)
