const one = () => {
    console.log(this);
}

one()

const anotherfun = function two(){
   console.log(this);   
}
two()

const three = function two(){
    console.log(this);   
}
 three()
