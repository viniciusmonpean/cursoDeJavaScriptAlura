const notas = [10, 6, 8];
notas.push(7);
var media = 0;

notas.forEach(element => {
    media += element
});
media = media / notas.length
console.log(`A média é ${media}`);