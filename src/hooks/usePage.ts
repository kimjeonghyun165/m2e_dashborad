export function usePage(data: any, dataPerPage: number, currentPage: number) {
    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = startIndex + dataPerPage;

    return data.slice(startIndex, endIndex);
}
