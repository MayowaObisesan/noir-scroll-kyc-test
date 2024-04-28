function convertStringToByteArray(str: string) {
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i));
    }
    return byteArray;
}