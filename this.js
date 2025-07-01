
console.log(" global this", this);


let two = () => {
    let a = "jshahha"
    console.log("inside arrow func", this.a);
    console.log("inside arrow ", this);
}

two(); // undefined in strict mode, global object in non-strict mode