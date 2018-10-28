export interface Goal {
    id: number;
    title: string;
    description: string;
    points: string[];
    image: string;
    amount?: number;
    timeframe?: string;
    isAdded: boolean;
    timestamp?: number;
}
