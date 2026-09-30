async function sayHello() {
    alert("WHY DID YOU CLICK IT");

    console.log("Before");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("After");

    alert("what is WRONG with YOU");
}
