import React, {useState, useEffect}from 'react'; 
import  data from './testData/data.txt'
import {tondStructure, moveXNegative, moveXPositive, moveYPositive, moveYNegative} from './tondeuse'


const  App = ()  => {
  const [dataset, setDataSet] = useState('')
  const [tondeuseData]= useState([])
  const [coordPelouse, setCoordPelouse]= useState({
    xP: String,
    yP: String,
  })



const rotateAndMoveBasedonPosition = (orienTation, sensRotation) =>{
  switch(orienTation) {
    case 'N': return rotateWhenN(sensRotation)
    case 'S': return rotateWhenS(sensRotation)
    case 'E': return rotateWhenE(sensRotation)
    case 'W': return rotateWhenW(sensRotation)
  }
}


// experimentation rotation is each use case

const rotateWhenN= (param) =>{
  if(param === 'L'){
    return 'W'
  }
  else if(param === 'R'){
    return 'E'
  }
}

const rotateWhenS =(param) =>{
  if(param === 'L'){
    return 'E'
  }
  else if(param === 'R'){
    return 'W'
  }
}


const rotateWhenE =(param) =>{
  if(param === 'L'){
    return 'N'
  }
  else if(param === 'R'){
    return 'S'
  }
}

const rotateWhenW =(param) =>{
  if(param === 'L'){
    return 'S'
  }
  else if(param === 'R'){
    return 'N'
  }
}


const MoveTondeuse = (orientation, Xvalue, Yvalue) =>{

  let xP =  parseInt(coordPelouse.xP) 
  let yP =  parseInt(coordPelouse.yP) 

  
    switch(orientation) {
      case 'N': return moveYPositive(Xvalue, Yvalue,xP,yP )
      case 'S': return moveYNegative(Xvalue, Yvalue,xP,yP )
      case 'E': return   moveXPositive(Xvalue, Yvalue,xP,yP )
      case 'W': return moveXNegative(Xvalue, Yvalue,xP,yP )
    }
  
  }


  const readFile = async(file) =>{
       const res = await fetch(file);
        const result = await res.text();
        setDataSet(result) 
  }



  const getTondeuseData = (dataset) =>{
    let test = 0
    let dataArray = dataset.split('')
    let compt =0;

    let positionArray = []

    for (let i = 3 ; i<= dataArray.length ; i++){
    
      if (dataArray[i] !== "\n"){
       
      //je recupere les donnees relative a chaque tondeuse tant que je croise pas de /n
        if(compt === 0){
          positionArray.push(dataArray[i])   
         }
        else if(compt ===1){
          positionArray.push(dataArray[i])
        }   
      }
  
      if (dataArray[i] === "\n" && compt === 0){
          //obj.cord = data ;
          compt++ ;
          continue
      }
      if (dataArray[i] === "\n" && compt === 1){
          compt = 0 ;
          tondeuseData.push(positionArray)
          positionArray=[]
           test++
      }
  }
  }

  const getPelouseCoordinate = async(dataset) =>{
    let dataArray = await dataset.split('')

    if(dataArray){
      let x =  dataArray[0]
      let y = dataArray[1]
        setCoordPelouse({
        x: x,
        y: y
      })
    }
  }


  const generateTondeuse = () =>{
    let tondeuse=[];
    tondeuseData.forEach(data =>{
      //console.log(data.slice(3))
        let item = tondStructure({x: data[0], y: data[1], orientation: data[3]},  data.slice(3))
      tondeuse.push(item)
    })
    return tondeuse

  }

  const moveAndreturnFinalPositions = async(tondeuses) =>{

   await tondeuses.forEach(tondeuse =>{

      //console.log(tondeuse.initialPosition.orientation)
         tondeuse.instruct.forEach(order =>{

          let access =  tondeuse.initialPosition
          let Or= access.orientation

               if(order === 'F'){
                  if(access !== undefined){
                    let result = MoveTondeuse(access.orientation, access.x, access.y)
                 tondeuse.initialPosition.x= parseInt(result.x) 
                 tondeuse.initialPosition.y= parseInt(result.y)
               // console.log(MoveTondeuse(access.orientation, access.x, access.y))
                  }
               } else{

                if(access !== undefined && Or !== undefined){
                  //console.log(typeof(rotateAndMoveBasedonPosition(Or, order)))
                  if((rotateAndMoveBasedonPosition(Or, order)) !== undefined){
                    access.orientation = rotateAndMoveBasedonPosition(Or, order)
                  }
                  
               //console.log(rotateAndMoveBasedonPosition(access.orientation, order))
                
                }
               }
         }) 
        console.log("hi")


    })
   console.log(tondeuses)
  }
  

  useEffect(()=>{
    readFile(data)
  },[])


  useEffect(() =>{
    if(dataset){
      getTondeuseData(dataset)
      getPelouseCoordinate(dataset)
    }
  },[dataset])

  useEffect(() =>{
    if(coordPelouse){
      const tondeuses =  generateTondeuse()
      moveAndreturnFinalPositions(tondeuses)
    }
  }, [coordPelouse])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
