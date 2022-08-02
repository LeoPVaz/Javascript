export default class Contreg {
    constructor(futureDate) {
        this.futureDate = futureDate
    }
    get actualDate(){
        return new Date();
    }
}