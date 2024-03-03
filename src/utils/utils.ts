export const throttle = (callback: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return () => {
        if (timer) return;
        timer = setTimeout(() => {
            callback();
            timer = null;
        }, delay);
    };
};

export const cls = (...classnames: string[]) => {
    return classnames.join(' ');
};


export const formatDateString = (inputDate: string) => {
    const dateObject = new Date(inputDate);
    const formattedDate = `${dateObject.getFullYear().toString().slice(2)}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
}


export function toLowerCaseString(inputString: string) {
    return inputString.toLowerCase();
}



export const fetchData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export function formatTotalKrwPrice(totalKrwPrice: number): any {

    if (totalKrwPrice === null) return null

    if (totalKrwPrice >= 100000000) {
        const formattedPrice = (totalKrwPrice / 100000000).toFixed(2);
        return `${formattedPrice}억`;
    } else if (totalKrwPrice >= 10000000) {
        const formattedPrice = (totalKrwPrice / 10000000).toFixed(2);
        return `${formattedPrice}천만`;
    } else if (totalKrwPrice >= 1000000) {
        const formattedPrice = (totalKrwPrice / 1000000).toFixed(2);
        return `${formattedPrice}백만`;
    } else if (totalKrwPrice >= 10000) {
        const formattedPrice = (totalKrwPrice / 10000).toFixed(2);
        return `${formattedPrice}만`;
    } else {
        return totalKrwPrice.toString();
    }

}


export function calculatePercentageChange(previousValue: number, currentValue: number) {
    if (previousValue === currentValue) {
        return 0;
    }
    const change = currentValue - previousValue;
    const percentageChange = (change / Math.abs(previousValue)) * 100;

    return Math.floor(percentageChange);
}