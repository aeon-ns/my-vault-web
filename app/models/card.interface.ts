import { CustomField } from "./custom-field.interface";

export interface Card {
    title: string;
    cardNo: number[];
    exp: Date;
    cvv: number;
    pinned: boolean;
    account: boolean;
    hasCustom: boolean;
    customFields: CustomField[];
}
