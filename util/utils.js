exports.TextToBool = (text) => {
    if (text) {
        text = text.toUpperCase();
        switch (text) {
            case "Y":
                return true;
            case "N":
                return false;
            default:
                return text;
        }
    }
}

exports.TextToCurrency = (text) => {
    if (!text) return text;
    currencyStr = text.replace(/\"/g, "").replace(/\$/g, "");
    return !!currencyStr ? parseFloat(currencyStr.trim()) : 0;
}