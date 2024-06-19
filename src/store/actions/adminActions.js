import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService';


// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispath, getState) => {
        try {
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


//start doing end
