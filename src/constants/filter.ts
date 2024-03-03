import { FilterItem } from "@/interfaces/interfaces";

export const filters: FilterItem[] = [
    {
        title: "Type",
        items: ["Walker", "Jogger", "Runner", "AllRounder"],
    },
    {
        title: "Grade",
        items: ["Normal", "Rare", "Epic", "Unique", "Legendary"],
    },
];

export const dividers = [
    { text: "Level", min: 1, max: 30 },
    { text: "Gen", min: 0, max: 8 },
    { text: "Minted", min: 0, max: 8 },
];
