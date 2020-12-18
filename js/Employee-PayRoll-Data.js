class EmployeePayrollData {

    //getter and setter method
    get id() { 
        return this._id; 
    }
    set id(id) { 
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('[A-Z]{1}[a-zA-z\\s]{2,}$')
        if(nameRegex.test(name))
            this._name = name;
        else throw ' Name is Incorrect ';
    }

    get profilePic() {
        return this._picture;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    get notes() {
        return this._notes;
    }
    set notes(note) {
        this._notes = note;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        let now = new Date();
        if(startDate > now ) throw 'Start Date is a Future Date'
        this._startDate = startDate;
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US", options);
        return "id = "+this.id +", name=" + this.name + ", gender=" + this.gender + 
                ", profilePic=" + this.profilePic + ", department=" + this.department +
                ", salary=" + this.salary + ", startDate=" + empDate + ", notes=" + this._notes;
    }
}