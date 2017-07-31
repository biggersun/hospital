import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get } from 'assets/js/request'
import { actionCreator } from 'assets/js/util'

const renderAccreditation = actionCreator(actionTypes.FIND_CERTIFICATELIST)
const renderAccreditationDetail = actionCreator(actionTypes.FIND_CERTIFICATECONTENT)

export function fetchAccreditation(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_CERTIFICATELIST, params)
        } catch (e) {
            return
        }
        dispatch(renderAccreditation(payload))
    }
}

export function fetchAccreditationDetail(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_CERTIFICATECONTENT, params)
        } catch (e) {
            return
        }
        location.href = payload
        dispatch(renderAccreditationDetail(payload))
    }
}

