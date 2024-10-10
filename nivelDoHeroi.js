let nome = "Lucas";
let experiencia = 1005;

if (experiencia > 1000 && experiencia <= 2000) {
    console.log(`O Herói de nome ${nome} está no nível de Bronze`);
} else if (experiencia > 2000 && experiencia <= 5000) {
    console.log(`O Herói de nome ${nome} está no nível de Ouro`);
} else if (experiencia > 5000 && experiencia <= 8000) {
    console.log(`O Herói de nome ${nome} está no nível de Diamante`);
} else if (experiencia > 8000 && experiencia <= 9000) {
    console.log(`O Herói de nome ${nome} está no nível de Ascendente`);
} else if (experiencia > 9000 && experiencia <= 10000) {
    console.log(`O Herói de nome ${nome} está no nível de Imortal`);
} else if (experiencia > 10000) {
    console.log(`O Herói de nome ${nome} está no nível de Radiante`);
} else {
    console.log(`O Herói de nome ${nome} está no nível de Ferro`);
}
