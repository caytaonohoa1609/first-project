import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService';


// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {

    return async (dispath, getState) => {
        try {
            dispath({
                type: actionTypes.FETCH_GENDER_START,
            })

            let res = await getAllCodeService("GENDER");
            if(res && res.errCode === 0) {
                dispath(fetchGenderSuccess(res.data));
            }
            else
            {
                dispath(fetchGenderFailed());
            }
        }catch(e) {
            dispath(fetchGenderFailed());
            console.log('fetchGenderStart error', e)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})


export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const fetchPositionStart = () => {

    return async (dispath, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if(res && res.errCode === 0) {
                dispath(fetchPositionSuccess(res.data));
            }
            else
            {
                dispath(fetchPositionFailed());
            }
        }catch(e) {
            dispath(fetchPositionFailed());
            console.log('fetchPositionFailed error', e)
        }
    }
}

export const fetchRoleStart = () => {

    return async (dispath, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if(res && res.errCode === 0) {
                dispath(fetchRoleSuccess(res.data));
            }
            else
            {
                dispath(fetchRoleFailed());
            }
        }catch(e) {
            dispath(fetchRoleFailed());
            console.log('fetchRoleFailed error', e)
        }
    }
}


//start doing end
