////////////////////////////////////////////////////////////////
/////                                                      /////
/////                      MAP BASED                       /////
/////                                                      /////
////////////////////////////////////////////////////////////////

// Makes a 16 x 12 map.
function makeGameMap() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gameWidth, 602);
    
    ctx.fillStyle = squareColor;
    var spacingW = 2;
    var spacingH = 2;
    var width = squareWidth;
    var height = squareHeight;
    var spacer = 50;
    var pos1, pos2;
    
    for(i = 0; i < gameWidth; i = i + 50){
        for(j = 0; j < gameHeight; j = j + 50){
            pos1 = i;
            pos2 = j;
            if(j === 0 && i != 0){
                pos1 = i/50;
                gameSpaceData[pos1] = [];
            } else if (i === 0 && j != 0) {
                pos2 = j/50;
            } else if (i != 0 && j != 0){
                pos1 = i/50;
                 pos2 = j/50;
            }
            var theColor;
            
            //Sets up the map and keeps it updated (sets color to blue....)
            for(k = 1; k <= changeColor.length - 1; k++){
                // Checks if this is where the user selectd.
                if(changeColor[0].spaceW == spacingW && changeColor[0].spaceH == spacingH){
                theColor = changeColor[0].newColor;
                }
                else if(changeColor[k].spaceW == i && changeColor[k].spaceH == j){
                theColor = changeColor[k].newColor;
                }  
            }
            
            
            
           
           
            gameSpaceData[pos1][pos2] = {spacingW, spacingH, theColor};
            
            
             ctx.fillStyle = gameSpaceData[pos1][pos2].theColor;
        
              ctx.fillRect(spacingW, spacingH, height, width);
            
            theColor = "white";
           spacingH += spacer;
        }
    spacingH = 2;
    spacingW += spacer;   
    }
}



// Gets the position in which a user clicks the map
function getPosition(evt){
    var x = evt.x;
    var y = evt.y;


    x -= canvas.offsetLeft; //width
    y -= canvas.offsetTop; // height

    var checker;
    for(i = 0; i < gameWidth/50; i++){
       for(j = 0; j < gameHeight/50; j++){
            checker = gameSpaceData[i][j];
           
           if((checker.spacingH < y && y < checker.spacingH + squareHeight) && (checker.spacingW < x && x <     checker.spacingW + squareWidth)){
              // alert("x:" + x + " y:" + y);
              var spaceH = checker.spacingH;
              var spaceW = checker.spacingW;
              var newColor = "green";
               changeColor[0] = {spaceH, spaceW, newColor};
               
           }
        } 
    }        
}


function MapOneSetUp(){
    changeColor[1] = {spaceW: 15 * 50, spaceH: 10 * 50, newColor: "blue"};
    changeColor[2] = {spaceW: 13 * 50, spaceH: 11 * 50, newColor: "blue"};
    
    changeColor[3] = {spaceW: 2 * 50, spaceH: 2 * 50, newColor: "red"};
    changeColor[4] = {spaceW: 1 * 50, spaceH: 1 * 50, newColor: "red"};
    
}









////////////////////////////////////////////////////////////////
/////                                                      /////
/////                    CHARACTER BASE                    /////
/////                                                      /////
////////////////////////////////////////////////////////////////