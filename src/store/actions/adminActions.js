import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers, 
    deteleUserService, editUserService , getTopDoctorHomeService,
    getAllDoctors, saveDetailDoctorService
} from '../../services/userService';
import { toast } from "react-toastify";
 

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

export const createNewUser = (data) => {
    return async (dispath, getState) => {
        try {
            let res = await createNewUserService(data);
            if(res && res.errCode === 0) {
                toast.success("Create a new user successed1")
                dispath(saveUserSuccess());
                dispath(fetchAllUsersStart());
            }
            else
            {
                dispath(saveUserFailed());
            }
        }catch(e) {
            dispath(saveUserFailed());
            console.log('fetchRoleFailed error', e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: 'CREATE_USER_SUCCESS'
})

export const saveUserFailed = () => ({
    type: 'CREATE_USER_FAILED'
})


export const fetchAllUsersStart = () => {

    return async (dispath, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if(res && res.errCode === 0) {
                dispath(fetchAllUsersSuccess(res.users.reverse()));
            }
            else
            {
                toast.error("Delete the user error!");
                dispath(fetchAllUsersFailed());
            }
        }catch(e) {
            toast.error("Delete the user error!");
            dispath(fetchAllUsersFailed());
            console.log('fetchRoleFailed error', e)
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: 'FETCH_ALL_USERS_SUCCESS',
    users: data
})

export const fetchAllUsersFailed = () => ({
    type: 'FETCH_ALL_USERS_FAILED',
})

export const deleteAUser = (userId) => {
    return async (dispath, getState) => {
        try {
            let res = await deteleUserService(userId);
            if(res && res.errCode === 0) {
                toast.success("Delete the user successed!")
                dispath(deleteUserSuccess());
                dispath(fetchAllUsersStart());
            }
            else
            {
                toast.error("Delete the users error!");
                dispath(deleteUserFailed());
            }
        }catch(e) {
            toast.error("Delete the users error!");
            dispath(deleteUserFailed());
            console.log('fetchRoleFailed error', e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editAUser = (data) => {
    return async (dispath, getState) => {
        try {
            let res = await editUserService(data);
            if(res && res.errCode === 0) {
                toast.success("Update the user successed!")
                dispath(editUserSuccess());
                dispath(fetchAllUsersStart());
            }
            else
            {
                toast.error("Update the users error!");
                dispath(editUserFailed());
            }
        }catch(e) {
            toast.error("Update the users error!");
            dispath(editUserFailed());
            console.log('EditUserFailed error', e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

// let res1 = await getTopDoctorHomeService(3);

export const fetchTopDocTor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            if(res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data,
                })
            }else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED
                })
            }
        }
        catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED
            })
        }
    }
}

export const fetchAllDocTors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            if(res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data,
                })
            }else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED
                })
            }
        }
        catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED
            })
        }
    }
}

export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);
            if(res && res.errCode === 0) {
                toast.success("Save Infor Detail Doctor successed!")

                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTORS_SUCCESS,
                })
            }else {
                console.log('err res', res)
                toast.error("Save Infor Detail Doctor error!")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTORS_FAILED
                })
            }
        }
        catch (e) {
            toast.error("Save Infor Detail Doctor error!")
            console.log('SAVE_DETAIL_DOCTORS_FAILED: ', e)
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTORS_FAILED
            })
        }
    }
}

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME");
            if(res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_HOURS_TIME_SUCCESS,
                    dataTime: res.data,
                })
            }else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
                })
            }
        }
        catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED
            })
        }
    }
}


export const getRequiredDoctorInfor = () => {

    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START,
            })

            let resPrice = await getAllCodeService("PRICE");
            let resPayment = await getAllCodeService("PAYMENT");
            let resProvince = await getAllCodeService("PROVINCE");
            if(resPrice && resPrice.errCode === 0
                && resPayment && resPayment.errCode === 0
                && resProvince && resProvince.errCode === 0) {
                    let data = {
                        resPrice: resPrice.data,
                        resPayment: resPayment.data,
                        resProvince: resProvince.data
                    }
                    dispatch(fetchRequiredDoctorInforSuccess(data));
            }
            else
            {
                dispatch(fetchRequiredDoctorInforFailed());
            }
        }catch(e) {
            dispatch(fetchRequiredDoctorInforFailed());
            console.log('fetchRequiredDoctorInforFailed error', e)
        }
    }
}

export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData
})

export const fetchRequiredDoctorInforFailed = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED
})
