const fs = require('fs');
const students = require('./../dto/StudentDTO');


module.exports = {

    FileWriter: function() {

        this.errors = []

        this.writePdf = (file)  => {
            let fileName = "/Users/juallen/Desktop/jj.pdf"
            fs.writeFile(fileName, file, err => {
                if (err) console.log(err);
            });
            return fileName;
        }
    },

    FileReader: function() {

        
    }
};