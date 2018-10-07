import lorem from 'lorem-ipsum';

export function loremIpsum(state="",action){
    console.log("inside lorem ipsum reducer");
    switch(action.type){
        case 'LOREM':{
            let ipsum=lorem();
            return ipsum;
        }
        default :return state;
    }
}