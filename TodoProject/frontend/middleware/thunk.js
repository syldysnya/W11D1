export const thunk = (store) => (next) => (action) => {
    debugger
    if (typeof action === 'function') {
        debugger
        return action(store.dispatch);
    } else {
        return next(action);
    }
}

export const logAction = (store) => {
    console.log("I'm in the top level middleware function")
    console.log(store)
    return (next) => {
        console.log("I'm in the function where next is the arg")
        console.log(next)
        return (action) => {
            console.log("I'm in the innermost function")
            console.log(action)
            return next(action)
        }
    }
}