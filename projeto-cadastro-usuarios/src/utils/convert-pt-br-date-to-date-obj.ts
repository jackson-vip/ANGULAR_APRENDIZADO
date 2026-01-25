export const convertPtBrDateToDateObj = (ptBrDate: string): Date | null => {
    if (!ptBrDate) return null; 

    const dateParts = ptBrDate.split('/');
    if (dateParts.length !== 3) return null;

    const day = parseInt(dateParts[0], 10); // parseInt(string, radix) o radix 10 indica base decimal
    const month = parseInt(dateParts[1], 10) - 1; // Meses são baseados em zero
    const year = parseInt(dateParts[2], 10);

    
    if (isValidDate(day, month, year)) {
        return new Date(year, month, day);
    }

    return null;
    // return new Date(year, month, day);
};

const isValidDate = (day: number, month: number, year: number): boolean => {
    const date = new Date(year, month, day);

    return (
        date.getDate() === day &&
        date.getMonth() === month &&
        date.getFullYear() === year
    );
};