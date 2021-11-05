// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);
// console.log(typeof patientAge);

//if - se 
//else - se

// if (condição) {
//     //condigo
// }

// else if (outra-condição) {
//     //outro código
// }

// else{
//     executa essa aqui
// }


let trybe = 19.40;

if (trybe >= 14 && trybe < 14.40) {
    console.log("esquenta");
}

else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20){
    console.log("Fechamento!");
}
else {
    console.log("Fora do momento sincrono!");
}