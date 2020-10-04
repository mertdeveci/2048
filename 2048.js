/* * * * *  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*	@author: Mert Deveci
*	@contact: mertdeveci0@gmail.com
*   @contact: https://www.linkedin.com/in/mert-deveci-49361a135/
*	@company: Sakarya University - Department of Computer Engineering (cs.sakarya.edu.tr)
*	@date: 4/9/2020
*   @file extension: JS
*
*	@description:   javascript codes of 2048 GAME
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */





// VARIABLES & STARTER PROCESSES
matrix=[2,2,2,4];       // probability: "75%" -> 2 & "%25" -> 4
move=false;             // move 
score=0;                // player score
best_player_name="";    // best player name
best_player_score="";   // best player score
player();               // starter settings
adder();                // add number
adder();                // add number
add_theme();            // design themes




// - - - - - - - - - - - - FUNCTIONS - - - - - - - - - - - - - - - - - 


// MANAGMENT & CONTROL
function managment(e){  //  MANAGEMENT OF ALL DIRECTION KEYS & CONTROL
    switch(e.key){
        case 'ArrowLeft':
            addition_left();
            design_left()
            break;
        case 'ArrowRight':
            addition_right();
            design_right();
            break;
        case 'ArrowDown':
            addition_down();
            design_down();
            break;
        case 'ArrowUp':
            addition_up();
            design_up();
            break;
        default:
            return;
    }
    remove_theme();     // REMOVE THEMES
    if(move){           // If there is no any operation of design or addition in functions, "move" variable is false, otherwise it's true.
        adder();
    }
    add_theme();        // ADD THEMES
    document.getElementById("player_score").textContent=score;  // refresh score
    if(controler()==false){     // control for end of game
        gameover();
        getName();
    }  
}
function adder(){       // ADD NEW NUMBER
    empty=[];
    for(a=0;a<4;a++){
        for(b=0;b<4;b++){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){
                empty.push(x.id);
            }
        }
    }
    if(empty.length==0){
        return false;
    }else{
        rnd=rand(empty.length);
        document.getElementById(empty[rnd]).textContent=matrix[rand(4)];
    }
}
function controler(){   // CONTROL OF END OF THE GAME
    for(a=0;a<4;a++){
        for(b=0;b<3;b++){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){
                return true;
            }
            y=document.getElementById(a+"x"+(b+1));
            if(y.textContent.length==0){
                return true;
            }
            if(x.textContent==y.textContent){
                return true;
            }
        }
    }

    for(a=0;a<3;a++){
        for(b=0;b<4;b++){
            x=document.getElementById(a+"x"+b);
            y=document.getElementById((a+1)+"x"+b);
            if(x.textContent==y.textContent){
                return true;
            }
        }
    }
    return false;
}

// THEME PROCESS
function add_theme(e){      // Set theme
        for(x=0;x<4;x++){
            for(y=0;y<4;y++){
            cell=document.getElementById(x+"x"+y);
                switch(cell.textContent){
                    case '2':
                        cell.parentElement.classList.add("cell-2");
                        break;
                    case '4':
                        cell.parentElement.classList.add("cell-4");
                        break;
                    case '8':
                        cell.parentElement.classList.add("cell-8");
                        cell.classList.add("upper-8");  // make color of h1 white 
                        break;
                    case '16':
                        cell.parentElement.classList.add("cell-16");
                        cell.classList.add("upper-8");
                        break;
                    case '32':
                        cell.parentElement.classList.add("cell-32");
                        cell.classList.add("upper-8");
                        break;
                    case '64':
                        cell.parentElement.classList.add("cell-64");
                        cell.classList.add("upper-8");
                        break;
                    case '128':
                        cell.parentElement.classList.add("cell-128");
                        cell.classList.add("upper-8");
                        break;
                    case '256':
                        cell.parentElement.classList.add("cell-256");
                        cell.classList.add("upper-8");
                        break;
                    case '512':
                        cell.parentElement.classList.add("cell-512");
                        cell.classList.add("upper-8");
                    break;
                    case '1024':
                        cell.parentElement.classList.add("cell-1024");
                        cell.classList.add("upper-8");
                    break;
                    case '2048':
                        cell.parentElement.classList.add("cell-2048");
                        cell.classList.add("upper-8");
                        break;
                    case '4096':
                        cell.parentElement.classList.add("cell-4096");
                        cell.classList.add("upper-8");
                        break;
                    case '8192':
                        cell.parentElement.classList.add("cell-8192");
                        cell.classList.add("upper-8");
                        break;
                    case '16384':
                        cell.parentElement.classList.add("cell-16384");
                        cell.classList.add("upper-8");
                        break;
                    default:
                        cell.parentElement.classList.add("default");
                }
            }
        }
}
function remove_theme(){    // Remove All themes
   for(a=0;a<4;a++){
       for(b=0;b<4;b++){
           cell=document.getElementById(a+"x"+b);
           cell.classList.remove("upper-8");
           cell.parentElement.classList.remove("default");
           for(c=0;c<=16384;c++){
            cell.parentElement.classList.remove("cell-"+c);
           } 
       }
   }
}

// ADDITIONS
function addition_left(){    // SUM-TO-LEFT
    move=false;
    for(a=0;a<4;a++){ 
        for(b=0;b<4;b++){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){continue;}
                for(c=b+1;c<4;c++){
                    y=document.getElementById(a+"x"+c);
                    if(y.textContent.length==0){continue;}
                    if(y.textContent==x.textContent){
                        value=parseInt(x.textContent);
                        score+=value*2;
                        x.textContent=value*2;
                        y.textContent='';
                        move=true;
                        break;
                    }else{
                        break;
                    }
            }
        }
    }
}
function addition_right(){   // SUM-TO-RIGHT
    move=false;
    for(a=3;a>=0;a--){       
        for(b=3;b>=0;b--){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){continue;}
                for(c=b-1;c>=0;c--){
                    y=document.getElementById(a+"x"+c);
                    if(y.textContent.length==0){continue;}
                    if(y.textContent==x.textContent){
                        value=parseInt(x.textContent);
                        score+=value*2;
                        x.textContent=value*2;
                        y.textContent='';
                        move=true;
                        break;
                    }else{
                        break;
                    }
                }
        }
    }
}
function addition_up(){      // SUM-TO-UP
    move=false;
    for(a=0;a<4;a++){   
        for(b=0;b<4;b++){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){continue;}
                for(c=a+1;c<4;c++){
                    y=document.getElementById(c+"x"+b);
                    if(y.textContent.length==0){continue;}
                    if(y.textContent==x.textContent){
                        value=parseInt(x.textContent);
                        score+=value*2;
                        x.textContent=value*2;
                        y.textContent='';
                        move=true;
                        break;
                    }else{
                        break;
                    }
                }
        }
    }
}
function addition_down(){    // SUM-TO-DOWN
    move=false;
    for(a=3;a>=0;a--){   
        for(b=0;b<4;b++){
            x=document.getElementById(a+"x"+b);
            if(x.textContent.length==0){continue;}
                for(c=a-1;c>=0;c--){
                    y=document.getElementById(c+"x"+b);
                    if(y.textContent.length==0){continue;}
                    if(y.textContent==x.textContent){
                        value=parseInt(x.textContent);
                        score+=value*2;
                        x.textContent=value*2;
                        y.textContent='';
                        move=true;
                        break;
                    }else{
                        break;
                    }
                }
        }
    }
}

// DESIGN
function design_left(){     //  DESIGN-TO-LEFT
    for(a=0;a<4;a++){   
        for(b=0;b<4;b++){
            empty=document.getElementById(a+"x"+b);
            if(empty.textContent.length==0){
                for(c=b;c<4;c++){
                    filled=document.getElementById(a+"x"+c);
                    if(filled.textContent.length!=0){
                        empty.textContent=filled.textContent;
                        filled.textContent='';
                        move=true;
                        break;
                    }
                }
            }
        }
    }
}
function design_right(){    //  DESIGN-TO-RIGHT
    for(a=0;a<4;a++){   
        for(b=3;b>=0;b--){
            empty=document.getElementById(a+"x"+b);
            if(empty.textContent.length==0){
                for(c=b;c>=0;c--){
                    filled=document.getElementById(a+"x"+c);
                    if(filled.textContent.length!=0){
                        empty.textContent=filled.textContent;
                        filled.textContent='';
                        move=true;
                        break;
                    }
                }
            }
        }
    }
}
function design_up(){       //  DESIGN-TO-UP
    for(a=0;a<4;a++){   
        for(b=0;b<4;b++){
            empty=document.getElementById(a+"x"+b);
            if(empty.textContent.length==0){
                for(c=a;c<4;c++){
                    filled=document.getElementById(c+"x"+b);
                    if(filled.textContent.length!=0){
                        empty.textContent=filled.textContent;
                        filled.textContent='';
                        move=true;
                        break;
                    }
                }
            }
        }
    }
}
function design_down(){     //  DESIGN-TO-DOWN
    for(a=3;a>=0;a--){   
        for(b=0;b<4;b++){
            empty=document.getElementById(a+"x"+b);
            if(empty.textContent.length==0){
                for(c=a;c>=0;c--){
                    filled=document.getElementById(c+"x"+b);
                    if(filled.textContent.length!=0){
                        empty.textContent=filled.textContent;
                        filled.textContent='';
                        move=true;
                        break;
                    }
                }
            }
        }
    }
}

// OTHERS
function rand(e){       // return random number
    return Math.floor(Math.random() * e);
}
function player(){      // set player information
    if(localStorage.getItem("best_player_name")==null){ // if there is no any user information default settings are below
        localStorage.setItem("best_player_name","Mert Deveci");
        localStorage.setItem("best_player_score","2048");
    }else{                                              // if information of best player is found...
        best_player_name=localStorage.getItem("best_player_name");  // get the best player name in local
        best_player_score=localStorage.getItem("best_player_score");    // get the best player sccore in local
    }
    document.getElementById("best_score").textContent="Best-Score:"+localStorage.getItem("best_player_score");  // write best player information
    document.getElementById("best_player").textContent="By "+localStorage.getItem("best_player_name");
}
function gameover(){    // game over
    document.querySelector("table").classList.replace("table1","table2");   // TABLE OPACITY
    document.querySelector("p").style.visibility="visible"; // GAME OVER
    if(best_player_score<score){    
        document.getElementById("best_score").textContent="Best-Score:"+score;  // refresh best score table
        document.querySelector(".name").style.visibility="visible";     // make input area visible to get player name
        document.querySelector("p").textContent="NEW RECORD";   // it's new record
        localStorage.setItem("best_player_score",score);        // refresh local storage of best player score
    }else{
        document.querySelector("p").textContent="GAME OVER";    
        document.getElementById("try_again").style.visibility="visible";    // make try_again button visible
    }
}
function getName(){     // get new best user name
    name=document.getElementById("type_name").value;    // get new best player name
    localStorage.setItem("best_player_name",name);      // set name in local
    document.getElementById("best_player").textContent="By "+localStorage.getItem("best_player_name");  // set best_player_name
    document.getElementById("try_again").style.visibility="visible";    // make try again button visible
}
function refresh(){     // reset the game
    location.reload();  
}

// - - - - - LİSTENER - - - - - -
document.addEventListener("keydown",managment);
