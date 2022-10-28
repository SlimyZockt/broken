
export type Result<T, E extends Error> = T | E

export const try_catch = <T, E extends Error>(
    callback: () => T,
    onError: (error: Error) => E
): Result<T, E> => {
    try {
        return callback()
    } catch (error) {
        if (error instanceof Error) {
            return onError(error);
        }
        return onError(new Error("error is not a error"));
    }
}

export const is_ok = <T, E extends Error>(result: Result<T, E>): result is T => {
    return !(result instanceof Error);
}

interface ErrorHandler<U> {
    <E extends Error>(e: E): U
}

export const unwrap = <T, U, E extends Error>(
    result: Result<T, E>,
    err_handler?: ErrorHandler<U>
): T | U => {
    if (is_ok(result)) return result
    if (err_handler !== undefined) return err_handler(result)
    else throw result
}