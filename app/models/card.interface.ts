import { CustomField } from "./custom-field.interface";

export interface Card {
    _id?: string,
    title: string;
    cardNo: number[];
    exp: Date;
    cvv: number;
    pinned: boolean;
    account: boolean;
    hasCustom: boolean;
    customFields: CustomField[];
}
