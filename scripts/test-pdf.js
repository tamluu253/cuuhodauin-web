const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('C:\\Users\\TL\\Documents\\Disk D\\VNPIS\\###Suppliers\\Sanjin\\Extracted_PDF\\PDF_Library\\A5(SYDK-125-100).pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error(error);
});
