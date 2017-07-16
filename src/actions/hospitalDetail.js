import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get } from 'assets/js/request'
import { actionCreator } from 'assets/js/util'

const renderHospital = actionCreator(actionTypes.FIND_HOSPITAL_MAIN)
const renderHospital2 = actionCreator(actionTypes.FIND_HOSPITAL)

export function fetchHospitalDetail(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_HOSPITAL_MAIN, params)
        } catch (e) {
            return
        }
        dispatch(renderHospital(payload))
    }
}

export function fetchHospitalDetail2(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_HOSPITAL, params)
        } catch (e) {
            return
        }
        dispatch(renderHospital2(payload))
    }
}
