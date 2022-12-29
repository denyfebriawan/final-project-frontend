import {Types} from  '../actions/actionTypes'

const intialState = {
    profile: {
        name: '',
        email: '',
        telephone: '',
        address: '',
        age: '',
    },
    formSubmitted: false
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case Types.LOGIN:
            console.log('login', action.payload.user)
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false
            }
    
        case Types.ADD_USER:
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false
            }
        
        case Types.UPDATE_PROFILE_PICTURE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    profileImage: action.payload.image
                }
            }
        
        case Types.UPDATE_USER:
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false
            }

        case Types.FORM_SUBMITTION_STATUS:
            return {
                ...state,
                formSubmitted: action.payload.status
            }

        default:
            return state;
    }
}

export default reducer;