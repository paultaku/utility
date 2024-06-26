export function throttle(fn: VoidFunction, delay = 500): VoidFunction {
    let timer: NodeJS.Timeout | null = null;

    return (...args) => {
        if (timer) return;
        timer = setTimeout(() => {
            fn(...args);
            timer = null;
        }, delay);
    }
}