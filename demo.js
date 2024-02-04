const one = () => {
    console.log(this);
}

one()

const anotherfun = function two(){
   console.log(this);   
}
two()

