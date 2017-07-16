import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get } from 'assets/js/request'
import { actionCreator } from 'assets/js/util'

const renderDoctor = actionCreator(actionTypes.FINDT)

export function fetchDoctorDetail(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FINDT, params)
        } catch (e) {
            return
        }
        dispatch(renderDoctor(payload))
    }
}

