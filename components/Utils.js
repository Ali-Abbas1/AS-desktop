// Debounce function to limit execution of mouse-events
export function debounce(func, wait, immediate) {
    var timeout

    return () => {
        var context = this,
            args = arguments

        var later = () => {
            timeout = null
            if (!immediate) func.apply(context, args)
        }

        var callNow = immediate && !timeout

        clearTimeout(timeout)

        timeout = setTimeout(later, wait)

        if (callNow) func.apply(context, args)
    }
}
