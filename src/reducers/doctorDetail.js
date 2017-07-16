import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function doctorDetail(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FINDT: {
        const {
            content,
            doctorsImg,
        } = payload
        return {
            ...state,
            content: content[0],
            doctorsImg,
        }
    }
    default:
        return state
    }
}
