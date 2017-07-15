import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function hospitalList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FIND_HOSPITALS: {
        const { content } = payload
        return {
            ...state,
            content,
        }
    }
    default:
        return state
    }
}
