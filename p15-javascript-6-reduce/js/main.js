//1.-
//Dado un string cualquiera ( por ejemplo "ajaicoiashdfoqwemoc" ) encontrar la cantidad de caracteres no repetidos usados en dicho string. Ejempo:
//input:ajaicoiashdfoqwemoc
//output:13

const charsUsedQty = string =>{
    let singleCharsArray = []
    string.split("").forEach( char => {
        !singleCharsArray.includes(char) && singleCharsArray.push(char)
    })
    return singleCharsArray.length
}

const charsUsedQtyReduced = string => {
    let noRepeated
    noRepeated = string.split("").reduce( (accum, current)=>{
        return !accum.includes(current) ? [...accum, current]: accum
    }, [])
    return noRepeated.length
}

const charsUsedQtyReduced_2 = string => string
    .split("")
    .reduce( (accum, current) => !accum.includes(current) ? [...accum, current]: accum , [])
    .length

console.log( charsUsedQtyReduced_2("aaaaaaa") )

const charsUsedQtyReduced_3 = string => {
    let noRepeated = string.split("").reduce( (accum, current)=>{
        !accum.includes(current) && accum.push(current)
        return accum
    }, [])
    return noRepeated.length
}


//2.-
// dado el siguiente array = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
// usar reduce para obtener la siguiente información:
// -Un array con aquellas personas que votaron
// -la edad promedio de todos los votantes
// -un array con aquellos votantes que votaron y queson menores a 30 años
// -la edad promedio de los no votantes
// -el porcentaje de votantes vs no votantes

dataArray = [
        {name:'Bob' , age: 30, voted: true},
        {name:'Jake' , age: 32, voted: true},
        {name:'Kate' , age: 25, voted: false},
        {name:'Sam' , age: 20, voted: false},
        {name:'Phil' , age: 21, voted: true},
        {name:'Ed' , age:55, voted:true},
        {name:'Tami' , age: 54, voted:true},
        {name: 'Mary', age: 31, voted: false},
        {name: 'Becky', age: 43, voted: false},
        {name: 'Joey', age: 41, voted: true},
        {name: 'Jeff', age: 30, voted: true},
        {name: 'Zack', age: 19, voted: false}]

// -Un array con aquellas personas que votaron
const getVoters = dataArray => dataArray.filter(person => person.voted)

const getVotersReduce = dataArray => {
    return voters = dataArray.reduce((accum, curr) => {
        return curr.voted ? [...accum, curr]: accum
    }, [])
}

const getVotersReduceOptimized = dataArray =>dataArray
    .reduce((accum, curr) => curr.voted ? [...accum, curr]: accum, [])


// -la edad promedio de todos los votantes
const getAverageAge = dataArray => dataArray
    .reduce((accSum, {age})=> accSum + age/dataArray.length,0)

// -un array con aquellos votantes que votaron y queson menores a 30 años

const getYoungVoters = dataArray => 
    dataArray
    .filter(element => element.voted & element.age<=30)

const getYoungVotersReduce = dataArray =>{
    return dataArray.reduce((acc,curr)=>{
        curr.voted & curr.age<=30 && acc.push(curr)
        return acc
    },[])
}

const getYoungVotersReduce_2 = dataArray =>
    dataArray
    .reduce((acc,curr)=>
        curr.voted & curr.age<=30 ? [...acc,curr]:acc,[])

// -la edad promedio de los no votantes
const getNonVotersAverageAge = dataArray => {
    let nonVotersInfo = dataArray.reduce((accSum, {age,voted})=> {
        if (!voted){
            accSum["nonVotersQty"]++
            accSum["ageSum"] += age
        } 
        return accSum
    },{"nonVotersQty":0, "ageSum":0})
    return nonVotersInfo.ageSum/nonVotersInfo.nonVotersQty
    }

// -el porcentaje de votantes vs no votantes
const votersVsNonVoters = dataArray => {
    let votersInfo = dataArray.reduce((accInfo, {voted})=>{
        voted ? accInfo.voters++: accInfo.nonVoters++
        return accInfo
    },{"voters":0,"nonVoters":0})
    console.log(votersInfo);
    return votersInfo.voters / votersInfo.nonVoters * 100
}