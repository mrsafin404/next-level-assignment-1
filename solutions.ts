function multiplyValue(value: number, multiplier: number = 2): number {
    return value * multiplier;
}


function processInput(value: string | number | boolean): string | number {
    if(typeof value === "string") {
        return value.trim().toLowerCase();
    } else if(typeof value === "number") {
        return value * 10;
    } else {
        return value ? "Active" : "Inactive";
    }
}


function formatCoordinate(tuple: readonly [number, number, string]): string {
    return `Location: ${tuple[2]} (${tuple[0]}, ${tuple[1]})`;
}