interface settingsProps {
    length: number,
    uppercase: boolean,
    numbers: boolean,
    symbols: boolean
}

export const Generator = (settings:settingsProps) => {

    const { length, uppercase, numbers, symbols } = settings;

    // if (!length || !lowercase || !uppercase || !numbers || !symbols) {
    //     return null;
    // }

    const uppercase_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercase_CHAR = "abcdefghijklmnopqrstuvwxyz"
    const number_CHAR = "1234567890"
    const symbol_CHAR = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    let combinedCharacters = lowercase_CHAR

    if (uppercase) combinedCharacters += uppercase_CHAR
    if (numbers) combinedCharacters += number_CHAR
    if (symbols) combinedCharacters += symbol_CHAR

    let password = ""

    for (let i = 0; i < length; i++) {
        password += combinedCharacters.charAt(Math.floor(Math.random() * combinedCharacters.length))
    }
    return password
}