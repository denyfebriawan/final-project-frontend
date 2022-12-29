import { Types } from "./actionTypes";

export const ActionCreators = {

    addProfile: (user) => ({type: Types.ADD_USER, payload: {user} }),

    updateProfileImage: (image) => ({type: Types.UPDATE_PROFILE_PICTURE, payload: {image} }),

    updateProfile: (user) => ({type: Types.UPDATE_USER, payload: {user} }),

    formSubittionStatus: (status) => ({type: Types.FORM_SUBMITTION_STATUS, payload: {status} }),

    login: (user) => ({type: Types.LOGIN, payload: {user} })
}