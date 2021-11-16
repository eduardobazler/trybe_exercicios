let person = {
    firstName: "Eduardo",
    lastName: "Bazler",
    age: 24,
    canDrive: true,
    favoriteMovies: ['Marley e eu', 'Matrix'],
    adress : {
        street: 'Rua Principado de Mônico',
        number: 555,
    }
};

person.favoriteMovies.push('Gente grande');


delete person.canDrive;

for (let key in person){
    console.log(person[key]);
}

function criaObjeto (nome = 'teste', idade = 0){
    let pessoa = {
        nome: nome,
        age: idade,
    }
    return pessoa;
}

let eduardo = criaObjeto('eduardo', 24);
console.log(eduardo.age);
console.log(criaObjeto());

console.log(typeof eduardo);