import { type APIContext, type MiddlewareNext } from "astro"
import type { MiddlewareHandler } from "astro";
import { ligthTheme } from "./utils/consts/theme";

const middleware: MiddlewareHandler = ({ locals, url, redirect, cookies }: APIContext, next: MiddlewareNext) => {
    const { pathname } = url
    const theme = cookies.get('theme')

    if (!theme) {
        locals.theme = ligthTheme
        cookies.set('theme', ligthTheme)
    }

    if (theme) {
        locals.theme = theme.value
    }

    if (!pathname.includes("welcome")) {
        return redirect("/welcome")
    }

    // return a Response or the result of calling `next()`
    return next();
};

export const onRequest = middleware;