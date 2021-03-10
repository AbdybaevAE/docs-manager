export type Atribute = {
    key: string;
    value: string;
}
export type TFormData = {
    docNumber: string;
    docType: string;
    docClass: string;
    docOrg: string;
    attributes: Atribute[];
    docContent: any;
}
export type TFormProps = {
    onSubmit: (data: TFormData) => void;
}