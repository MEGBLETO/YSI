export const tondStructure = function (position, instruction) {
  const initialPosition = position;
  const instruct = instruction;
  return { initialPosition, instruct };
};

//ici les fonctions de deplacement en fonction de lorientation
export const moveYNegative = (x, y, xP, yP) => {
   let temp = parseInt(y) - 1;

   if(temp >= yP){
    return  {
        x: x,
        y: yP
    }
   }
   return  {
    x: x,
    y: temp
}

};

export const moveYPositive =  (x, y, xP, yP) => {

    let temp = parseInt(y) + 1;

    if(temp >= xP){
        return  {
            x: x,
            y: yP
        }
    }

    return  {
        x: x,
        y: temp
    }

};

export const moveXNegative =  (x, y, xP, yP) => {
   let temp = parseInt(x) - 1;

   if(temp >= xP){
    return  {
        x: xP,
        y: y
    } 
   }

   return  {
    x: temp,
    y: y
}

};

export const moveXPositive =  (x, y, xP, yP) => {
  let temp = parseInt(x)+ 1;

  if(temp >= xP){
    return  {
        x: xP,
        y: y
    }
  }

  return  {
    x: temp,
    y: y
}
}
