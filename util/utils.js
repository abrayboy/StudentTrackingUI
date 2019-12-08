module.exports = {

    Utils: {

        TextToBool: (text) => {
            text = text.toUpperCase();
            switch(text) {
                case "Y":
                    return true;
                case "N":
                    return false;
                default:
                    return text;
            }
        }
    }
}