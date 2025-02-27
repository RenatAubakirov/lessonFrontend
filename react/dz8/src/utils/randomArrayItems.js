export default function randomArrayItems(sourceArray, len) {
    if (sourceArray.length <= len) return [...sourceArray];

    const set = new Set();
    while (set.size < len) {
        const i = Math.floor(Math.random() * sourceArray.length);
        set.add(sourceArray[i]);
    }
    return [...set];
}