const USUARIO = 'felipe'
const PASS = '1234'
const MAX_CANT_INTENTOS=3

let usuarioIngresado=''
let passIngresada=''

usuarioIngresado = prompt('Ingrese su usuario: ')
while(usuarioIngresado == 'ESC'){
    usuarioIngresado = prompt('Ingrese su usuario: ')
}
passIngresada = prompt('Ingrese su contraseña: ')
for(let intentos=1;intentos<=MAX_CANT_INTENTOS;intentos++){
    while(passIngresada == 'ESC'){
        passIngresada = prompt('Ingrese su contraseña: ')
    }
    if(intentos == MAX_CANT_INTENTOS){
        alert('ATENCIÓN! Ha ingresado mal la contraseña '+ MAX_CANT_INTENTOS + ' de veces. Su cuenta será bloqueada')
    }
    else{
        if(passIngresada == PASS){
            alert('Usuario y contraseña validados. Ingresando a...')
            break
        }
        else{
            passIngresada = prompt('Contraseña incorrecta. Le quedan ' + (MAX_CANT_INTENTOS-intentos) +' intentos. Ingrese su contraseña nuevamente: ')
        }
    }
}


