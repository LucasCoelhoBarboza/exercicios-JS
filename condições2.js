var now= new Date()
var hora =now.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 5){
    console.log('boa madrugada')
}
if (hora <= 11){
    console.log('bom dia')
}
if (hora >= 12 && hora <= 17){
    console.log('boa tarde')
}
 if (hora >= 18){
    console.log('boa noite')
}