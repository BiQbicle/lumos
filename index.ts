import * as fs from 'fs'
import * as Papa from 'papaparse'

interface Star {
    Star_name: string;
    Distance: number;
    Mass: number;
    Radius: number
    Luminosity: number;
}
let minDistance = Infinity;
let maxDistance = -Infinity;
let totalDistance = 0;
let totalDistanceCount = 0;

let minMass = Infinity;
let maxMass = -Infinity;
let totalMass = 0;
let totalMassCount = 0;

let minRadius = Infinity;
let maxRadius = -Infinity;
let totalRadius = 0;
let totalRadiusCount = 0;

let minLuminosity = Infinity;
let maxLuminosity = -Infinity;
let totalLuminosity = 0;
let totalLuminosityCount = 0;


const csvData = fs.readFileSync('cleaned.csv', 'utf8');


const result = Papa.parse<Star>(csvData, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true

})
for (let i = 0; i < result.data.length; i++) {
    // Distance
    if (!isNaN(result.data[i].Distance)) {
        if (result.data[i].Distance < minDistance) {
            minDistance = result.data[i].Distance
        }
        if (result.data[i].Distance > maxDistance) {
            maxDistance = result.data[i].Distance
        }
        totalDistance += result.data[i].Distance
        totalDistanceCount++
    }
    
    // Mass
    if (!isNaN(result.data[i].Mass)) {
        if (result.data[i].Mass < minMass) {
            minMass = result.data[i].Mass
        }
        if (result.data[i].Mass > maxMass) {
            maxMass = result.data[i].Mass
        }
        totalMass += result.data[i].Mass
        totalMassCount++
    }
 
    // Radius
    if (!isNaN(result.data[i].Radius)) {
        if (result.data[i].Radius < minRadius) {
            minRadius = result.data[i].Radius
        }
        if (result.data[i].Radius > maxRadius) {
            maxRadius = result.data[i].Radius
        }
        totalRadius += result.data[i].Radius
        totalRadiusCount++
    }
 
    // Luminosity
    if (!isNaN(result.data[i].Luminosity)) {
        if (result.data[i].Luminosity < minLuminosity) {
            minLuminosity = result.data[i].Luminosity
        }
        if (result.data[i].Luminosity > maxLuminosity) {
            maxLuminosity = result.data[i].Luminosity
        }
        totalLuminosity += result.data[i].Luminosity
        totalLuminosityCount++
    }
 }
console.log("Minimum Distance: ", minDistance)
console.log("Maximum Distance: ", maxDistance)
console.log("Avg Distance: ", totalDistance)

console.log("\nMinimum Mass: ", minMass)
console.log("Maximum Mass: ", maxMass)
console.log("Avg Mass: ", totalMass)

console.log("\nMinimum Radius: ", minRadius)
console.log("Maximum Radius: ", maxRadius)
console.log("Avg Radius: ", totalRadius)

console.log("\nMinimum Luminosity: ", minLuminosity)
console.log("Maximum Luminosity: ", maxLuminosity)
console.log("Avg Luminosity: ", totalLuminosity)