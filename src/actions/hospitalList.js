import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get } from 'assets/js/request'
import { actionCreator } from 'assets/js/util'

const renderList = actionCreator(actionTypes.FIND_HOSPITALS)

export function fetchHospitalList(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_HOSPITALS, params)
        } catch (e) {
            return
        }
        dispatch(renderList(payload))
    }
}
