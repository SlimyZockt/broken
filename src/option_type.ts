import { Result } from './result_type';
export type None = undefined | null
export type Some<T> = T
export type Option<T> = Some<T> | None

export const is_some = <T>(val: Option<T>): val is Some<T> => {
    if (typeof val === 'undefined') return false
    if (val === null) return false
    return true
}

export const match = <T>(
    opt: Option<T>,
    some_handler: <T>(val: T) => T,
    none_handler: () => T,
    ) => {
    if (is_some(opt)) return some_handler(opt)
    return none_handler()
}

export const safe_unwrap = <T>(opt: Option<T>): Result<T, Error> => {
    if (is_some(opt)) { return opt}
    return new Error("Failed unwrapping")
}

export const unwrap = <T>(opt: Option<T>): T => {
    if (is_some(opt)) { return opt }
    throw "Failed unwrapping"
}