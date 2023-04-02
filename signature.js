console.log("script de assinatura digital")

// var encrypted = CryptoJS.SHA256("teste").toString()
// console.log(encrypted)

const codValidacao = geraCodigoValidacao()
console.log(codValidacao)

const salt = CryptoJS.lib.WordArray.random(8).toString(CryptoJS.enc.Hex);
const hash = CryptoJS.HmacSHA512(codValidacao,salt).toString()
console.log("Salt: ", salt)
console.log("Hash: ", hash)


function geraCodigoValidacao(){
    user="c084604"
    matricula = user.substr(1,user.length-1)
    const prefix = CryptoJS.lib.WordArray.random(2).toString(CryptoJS.enc.Hex);
    const mid = CryptoJS.lib.WordArray.random(2).toString(CryptoJS.enc.Hex);
    const sufix = CryptoJS.lib.WordArray.random(2).toString(CryptoJS.enc.Hex);
    const controle1 = CryptoJS.lib.WordArray.random(2).toString(CryptoJS.enc.Hex);
    const controle2 = CryptoJS.lib.WordArray.random(2).toString(CryptoJS.enc.Hex);
    const data = new Date();
    const dia = adicionaZero(data.getDate());
    const mes = adicionaZero(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = adicionaZero(data.getHours());
    const minutos = adicionaZero(data.getMinutes());
    const segundos = adicionaZero(data.getSeconds());
    const milisegundos = adicionaZero(data.getMilliseconds());

    return controle1 + "." + prefix + "." + dia + "." + mes + "." + ano + "." + mid + "." + hora + "." + minutos + "." + segundos + "." + milisegundos + "." + sufix + "." + matricula + "." + controle2;

    function adicionaZero(numero){
        if(numero <= 9)
            return "0" + numero;
        else
            return numero;
    }

}