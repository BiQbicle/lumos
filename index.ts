import * as fs from 'fs'
import * as Papa from 'papaparse'

interface Star {
    Star_name: string;
    Distance: number;
    Mass: number;
    Radius: number
    Luminosity: number;
}


const csvData = fs.readFileSync('cleaned.csv', 'utf8');


const result = Papa.parse<Star>(csvData, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true

})
console.log(result.data[0]);
