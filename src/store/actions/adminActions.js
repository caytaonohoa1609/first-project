import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers, deteleUserService } from '../../services/userService';
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


//start doing end
