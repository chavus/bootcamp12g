// usando mentorsArray, realizar lo siguiente:
// -Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
// -Obtener el promedio individual de cada mentor
// -crear un array de strings con la siguiente forma:
//      "Mi nombre es {nombre} y mi promedio es de {promedio}"
// -Obtener la lista de mentores cuyo promedio sea mayor a 9.5
// */
var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

// -Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
// let scoreAverage = {
//     HTML:0,
//     CSS:0,
//     JS:0,
//     ReactJS:0
// }

const subjectAverage_1 = array => {
    // Iterate through all mentors
    // Get subject and then get score
    // Sum and then divide by length of mentors
    // return scoreAverage = {HTML:X, CSS:Y, JS:Z, ReactJS:I}
    let scoreAverage = {
        HTML:0,
        CSS:0,
        JS:0,
        ReactJS:0
    }
    array.forEach(mentorObject => {
        mentorObject.scores.forEach(subjectObject =>{
            scoreAverage[subjectObject.signature] += subjectObject.score/array.length
        })
    });
    return scoreAverage
}


// const subjectAverage_2 = array =>{
//     // Get scores of each subject
//     array.map()

// }

// -Obtener el promedio individual de cada mentor
// [{name:Israel, average: 9}, {...}]
const getMentorAverage_1 = array => {
    let mentorsAverageArray = []
    array.forEach((mentorObject, mentorIdx) =>{ // Iterates over each mentor
        mentorsAverageArray.push({name:mentorObject.name, average:0}) // Creates the array to be returned
        mentorObject.scores.forEach(subjectObject =>{ // Iterates over each subjectObject of the mentor
            mentorsAverageArray[mentorIdx].average += subjectObject.score / mentorObject.scores.length // Start adding the average to the average field
        })
    })
    return mentorsAverageArray
}

const getMentorAverage_2 = array => {
    return array.map(mentorObject => {
        return {
            name: mentorObject.name,
            average: (mentorObject.scores.map(score => score.score)).reduce((sum, score) => sum + score) / mentorObject.scores.length
        }
    })
}

// -crear un array de strings con la siguiente forma:
//      "Mi nombre es {nombre} y mi promedio es de {promedio}"
const getMentorAverageStringsArray_1 = array => {
    let mentorsAverage = getMentorAverage_1(array)
    let mentorsAverageSentenceArray = []

    mentorsAverage.forEach( mentorAverage =>
        // Build the sentence with the results and add it to an array
        mentorsAverageSentenceArray.push(`Mi nombre es ${mentorAverage.name} y mi promedio es de ${mentorAverage.average}`) 
        )

    return mentorsAverageSentenceArray
}

const getMentorAverageStringsArray_2 = array =>{
    let mentorsAverage = getMentorAverage_2(array)
    return mentorsAverage.map(mentorAverage => `Mi nombre es ${mentorAverage.name} y mi promedio es de ${mentorAverage.average}`)
}

// -Obtener la lista de mentores cuyo promedio sea mayor a 9.5
const getHigherScoresMentors_1 = array => {
    let mentorsAverage = getMentorAverage_1(array)
    let higherScoresArray = []
    mentorsAverage.forEach(mentorAverage =>
        mentorAverage.average > 9.5 && higherScoresArray.push(mentorAverage.name)
    )
    return higherScoresArray
}

const getHigherScoresMentors_2 = array => {
    let mentorsAverage = getMentorAverage_2(array)
    return mentorsAverage.filter(mentorAverage => mentorAverage.average > 9.5)
}

/*----------------------------------------------*/
let songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      }
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      }
    }, {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      }
    }, {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      }
    }, {
      name: "Daze",
      band: "Poets of the Fall",
      releaseYear: "2014",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      }
    }, {
      name: "The Sweet Scape",
      band: "Poets of the fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      }
    }
  ]
  
  /*agrupar únicamente los nombres de las bandas, sin repeticiones*/
  //["metallica", "Los Angeles Azules", "..."]
  const getbandsList =  dataArray => {
      let bandsArray = []
      dataArray.forEach(song => {
        // !bandsArray.map(element => element.toUpperCase()).includes(song.band.toUpperCase()) && bandsArray.push(song.band)
        if (!bandsArray.map(element => element.toLowerCase()).includes(song.band.toLowerCase())){
            bandsArray.push(song.band)
        }
      })
    return bandsArray
  }


  /*
    Agrupar las canciones de cada banda
  */
  // [{name: <band>, songs:[<song1>, <song2>]}, {...}]
  const getSongsPerBand = songsArray => {
      let bandsList = getbandsList(songsArray)
      let songsPerBand = []
      bandsList.forEach( bandName =>{
        let songsList = []
        songsArray.forEach( song => {
            song.band.toLowerCase() ==  bandName.toLowerCase() && songsList.push(song.name) 
        })
        songsPerBand.push({name: bandName, songs:songsList})
      })
      return songsPerBand
  }
  
  const getSongsPerBand_2 = songsArray =>{
    // bandsList
    // Iterate over songsArray
    // {band: "xxx", songs:[]}
    
  }
  
  
  /*
    saber cuál es la canción con más likes
    ( nombre de la canción y nombre de la banda)
 */
  // {name: <Nombre de la canción>, band:<nombre de la banda>}

  const getMostLikedSong = songArray => {
      let mostLikedSong = {statistics:{likes:0}}
      songArray.forEach( song =>{
        if (song.statistics.likes > mostLikedSong.statistics.likes) {
            mostLikedSong = song
        }
      })
      return mostLikedSong.name
  }

  
  /*saber cuál es la canción con más reproducciones
  ( nombre de la canción y nombre de la banda)
  */

  // Function to get the most liked song by statistic property
  const getMostLikedByStatistic = (songArray, statisticsProperty) => {
    let mostLikedSong= {}
    songArray.forEach( (song, index) => {
        if (index == 0){
          mostLikedSong = song
        }else if (song.statistics[statisticsProperty] > mostLikedSong.statistics[statisticsProperty]) {
          mostLikedSong = song
      }
    })
    return mostLikedSong
} 