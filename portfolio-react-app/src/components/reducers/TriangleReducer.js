export function TriangleReducer(state={"a":null,"b":null,"c":null},action){
    switch(action.type){
        case 'DIMENSIONS':{
            let newState={"a":action.payload.a,"b":action.payload.b,"c":action.payload.c}
            return newState;
        }
        default : return state;
    }
}
