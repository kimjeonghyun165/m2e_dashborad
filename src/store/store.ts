import { create } from 'zustand';
import { FilterLinkState, GenState, LevelState, MintedState, QualityState, TypeState } from './interface';

export const useStoreType = create<TypeState>((set) => ({
    selectedType: [],
    updateType: (type) => set((state) => ({ selectedType: [...state.selectedType, type] })),
    removeType: (typeToRemove) => set((state) => ({
        selectedType: state.selectedType.filter((type) => type !== typeToRemove)
    }))
})
);

export const useStoreQuality = create<QualityState>((set) => ({
    selectedQuality: [],
    updateQuality: (quality) => set((state) => ({ selectedQuality: [...state.selectedQuality, quality] })),
    removeQuality: (qualityToRemove) => set((state) => ({
        selectedQuality: state.selectedQuality.filter((quality) => quality !== qualityToRemove)
    }))
}))


export const useStoreLevel = create<LevelState>((set) => ({
    maxLevel: 30,
    minLevel: 1,
    updateMaxLevel: (level) => set((state) => ({ ...state, maxLevel: level })),
    updateMinLevel: (level) => set((state) => ({ ...state, minLevel: level })),
}));

export const useStoreGen = create<GenState>((set) => ({
    maxGen: 8,
    minGen: 1,
    updateMaxGen: (gen) => set((state) => ({ ...state, maxGen: gen })),
    updateMinGen: (gen) => set((state) => ({ ...state, minGen: gen })),
}));

export const useStoreMinted = create<MintedState>((set) => ({
    maxMinted: 8,
    minMinted: 0,
    updateMaxMinted: (mint) => set((state) => ({ ...state, maxMinted: mint })),
    updateMinMinted: (mint) => set((state) => ({ ...state, minMinted: mint })),
}));


export const useStoreLink = create<FilterLinkState>((set) => ({
    link: "",
    updateLink: () => {
        const selectedQuality = useStoreQuality.getState();
        const selectedType = useStoreType.getState();
        const selectedGen = useStoreGen.getState();
        const selectedLevel = useStoreLevel.getState();
        const selectedMinted = useStoreMinted.getState();

        var link = `?types=${selectedType.selectedType.join('|')}`
        link += `&qualities=${selectedQuality.selectedQuality.join('|')}`
        link += `&mingen=${selectedGen.minGen}&maxgen=${selectedGen.maxGen}`
        link += `&minlevel=${selectedLevel.minLevel}&maxlevel=${selectedLevel.maxLevel}`
        link += `&minmint=${selectedMinted.minMinted}&maxmint=${selectedMinted.maxMinted}`

        set({ link: link });
    }
}));