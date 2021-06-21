/*  
1. it will print joel and Coding. Var sets the scope of the variables global.
2. It will print out the the Object this, wich refers to the scope it is currently in.
3. It will print out the class Test with its properties and methods. "this" referse to its scope wich is the class
4. It will print out "HELLO WORLD". The function c is never called and function b is still inside the scope of the const test
*/


function random (){
    return Math.random()*100
}
console.log("___________________")

function cat_dog_translator(){
    console.log("“Meow” means “woof” in cat.”")
}
cat_dog_translator()
console.log("___________________")

function type(a){
    return typeof(a)
}
console.log("___________________")
function first_string(string){
    return string[0]
}

function first_array(array){
    return array[0]
}


function char(string){
    return string.length===3 
}
