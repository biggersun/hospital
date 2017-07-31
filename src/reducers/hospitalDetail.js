import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function hospitalDetail(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FIND_HOSPITAL_MAIN: {
        return {
            ...state,
            ...payload,
        }
    }
    case actionTypes.FIND_HOSPITAL: {
        const { content } = payload
        return {
            ...state,
            hostpital2: content[0],
        }
    }
    case actionTypes.FIND_DEP: {
        const { content } = payload
        return {
            ...state,
            depDetail: content[0],
        }
    }
    default:
        return state
    }
}
