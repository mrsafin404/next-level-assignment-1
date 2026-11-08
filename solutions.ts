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


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let concatedArray: T[] = [];

    arrays.forEach(arr => {
        concatedArray.push(...arr);
    })

    return concatedArray;
}


interface Course {
    title: string
    students: number
    isPublished: boolean
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter(course => course.isPublished && course.students >= minStudents);
}


function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map(obj => obj[key]);
}