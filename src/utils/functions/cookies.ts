export function getCookies(document: Document): Record<string, string> {
    const arr = document.cookie
        .split("; ")
        .map((el) => el.split("="))

    const cookieRecord: Record<string, string> = {}
    for (const cookie of arr) {
        cookieRecord[cookie[0]] = cookie[1]
    }

    return cookieRecord
}

export function setCookie(document: Document, cookie: Record<string, string>, key: string, value: string) {
    let newCookie = ""
    for (const oldKey of Object.keys(cookie)) {
        if (oldKey === key) {
            newCookie += `${key}=${value}; `
            continue
        }

        newCookie += `${oldKey}=${cookie[oldKey]}; `
    }

    document.cookie = newCookie
}