import { CustomField } from "./custom-field.interface";

export interface Pword {
    title: string;
    username: string;
    password: string;
    pinned: boolean;
    account: boolean;
    hasCustom: boolean;
    customFields: CustomField[];
}