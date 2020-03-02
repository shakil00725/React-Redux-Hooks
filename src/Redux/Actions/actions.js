import * as actionTypes  from './types';

export const setInc = count => {
    return{
        type:actionTypes.INC,
        payload:{
            count:count
        }
    }
}

export const setDec = count => {
    return{
        type:actionTypes.DEC,
        payload:{
            count:count
        }
    }
}
