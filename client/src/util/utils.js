exports.TextToBool = (text) => {
    if (text) {
        let textUp = text.toUpperCase();
        switch (textUp) {
            case "Y":
                return true;
            case 'TRUE':
                return true;
            case 'FALSE':
                return false;
            case "N":
                return false;
            default:
                return text;
        }
    }
    return "N/A";
}

exports.TextToCurrency = (text) => {
    if (text == 0) return text;
    else if (!!text) return "N/A";
    let currencyStr = text.replace(/"/g, "").replace(/\$/g, "");
    return !!currencyStr ? parseFloat(currencyStr.trim()) : 0;
}