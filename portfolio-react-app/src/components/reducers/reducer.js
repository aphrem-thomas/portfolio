import lorem from 'lorem-ipsum';

export function loremIpsum(state='therek;lsdfjlasdjfa;sldfj;asldfjdlfa;sldfjdsl;fjdslfja;sd',action){
    //console.log("inside lorem ipsum reducer");
    switch(action.type){
        case 'LOREM':{
            // let ipsum=lorem();
            return state;
        }
        default :return state;
    }
}

export function cursor(state=0,action){
    switch(action.type){
        case 'INC_CURSOR':{
            return state+1;
        }
        default : return state;
    }
}

export function keyDown(state=null,action){
    switch(action.type){
        case 'KEY_DOWN':{
            //console.log("key typed: "+action.payload);
            return action.payload;
        }
        default : return state;
    }
}
