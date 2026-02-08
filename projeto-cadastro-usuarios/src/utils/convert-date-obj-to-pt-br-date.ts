export const convertDateObjToPtBrDate = (dateObj: Date): string => {
    if(!dateObj) return '';

    const day = padZero(dateObj.getDate());
    const month = padZero(dateObj.getMonth() + 1);
    const year = padZero(dateObj.getFullYear());

    return `${day}/${month}/${year}`;
}

const padZero = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
}