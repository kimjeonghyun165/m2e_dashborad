export interface TypeState {
    selectedType: string[];
    updateType: (type: string) => void;
    removeType: (type: string) => void;
}

export interface QualityState {
    selectedQuality: string[];
    updateQuality: (quality: string) => void;
    removeQuality: (quality: string) => void;
}

export interface LevelState {
    maxLevel: number;
    minLevel: number;
    updateMaxLevel: (level: number) => void;
    updateMinLevel: (level: number) => void;
}

export interface GenState {
    maxGen: number;
    minGen: number;
    updateMaxGen: (gen: number) => void;
    updateMinGen: (gen: number) => void;
}

export interface MintedState {
    maxMinted: number;
    minMinted: number;
    updateMaxMinted: (minted: number) => void;
    updateMinMinted: (minted: number) => void;
}

export interface FilterLinkState {
    link: string;
    updateLink: () => void;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}