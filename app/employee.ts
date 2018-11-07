export class Employee {
    public empId: number;
    public empName : string;
    public empAddress : string;

    constructor(id:number, name:string, address:string) {
        this.empId = id;
        this.empName = name;
        this.empAddress = address;         
    }
}
