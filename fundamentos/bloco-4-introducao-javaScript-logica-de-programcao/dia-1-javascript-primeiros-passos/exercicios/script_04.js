function valida_angulo(a, b, c){
    if ((typeof a != "number") || (typeof b != "number") || (typeof c != "number")){
        return console.log("Os valores não são nímericos!");
        
    }
    else {
        if(a + b + c == 180){
            return console.log(true);
        }
        else{
            return console.log(false);
        }
    }

}

valida_angulo(45, 45, -90);