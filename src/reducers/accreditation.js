import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function accreditation(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FIND_CERTIFICATELIST: {
        const {
            content,
        } = payload
        return {
            ...state,
            content,
        }
    }
    case actionTypes.FIND_CERTIFICATECONTENT: {
        const {
            content,
        } = payload
        return {
            ...state,
            content1: content[0].content,
        }
    }
    default:
        return state
    }
}
