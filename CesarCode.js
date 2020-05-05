//_[N_F]_
const crypt = (message) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let final_message = ""
    for (i = 0; i < message.length; i++) {
        if (alphabet.indexOf(message[i]) !== -1) {
            x = alphabet.indexOf(message[i])
            y = alphabet[Math.abs((x + 3) % alphabet.length)]
            final_message += y
        }
        else {
            final_message += message[i]
        }

    }console.log(`${message} = ${final_message}`)

}

const decrypt = (message) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let final_message = ""
    for (i = 0; i < message.length; i++) {
        if (alphabet.indexOf(message[i]) !== -1) {
            x = alphabet.indexOf(message[i])
            y = alphabet[Math.abs((x - 3) % alphabet.length)]
            final_message += y
        }
        else {
            final_message += message[i]
        }

    }console.log(`${message} = ${final_message}`)

}

crypt("hello world")
decrypt("khoor zruog")
