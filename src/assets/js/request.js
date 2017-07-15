import * as http from './http'

async function request(method, url, params, opt = {}, httpOpt) {
    const {
        needLoading = true,
        checkAccount = true,
        showErrorMsg = true,
    } = opt

    if (needLoading) {
        // loading.add()
    }

    let res

    try {
        res = await http[method](url, params, httpOpt)
    } catch (e) {
        if (checkAccount && e.errno === 4 && e.data.errno === 10000) {
            location.href = 'LOGIN_URL'
        }

        if (showErrorMsg) {
            // console.error(e.errno === 4 ? e.data.msg : e.msg)
        }

        throw e
    } finally {
        if (needLoading) {
            // loading.remove()
        }
    }

    return res
}

export function get(...arg) {
    return request('get', ...arg)
}

export function post(...arg) {
    return request('post', ...arg)
}

export function uploadFile(url, params, opt = {}, httpOpt) {
    const newOpt = Object.assign({
        needLoading: false,
    }, opt)

    return request('uploadFile', url, params, newOpt, httpOpt)
}
