const ROOT_PATH = '/'

export const phoneReg = /^1[34578]\d{9}$/

export const emailReg = /^[-\w.]+@([\w-]+\.)+[a-z]{2,3}$/

export const actionCreator = type => payload => ({ type, payload })

export const matchSidebarItem = (key, path) => path === key || path.startsWith(`${key}/`)


export function relativeToRoot(path) {
    if (!path.startsWith(ROOT_PATH)) {
        throw new Error(`path should be sub path of ${ROOT_PATH}`)
    }

    return path.slice(ROOT_PATH.length)
}


export function changeTitle(title) {
    document.title = title
}
