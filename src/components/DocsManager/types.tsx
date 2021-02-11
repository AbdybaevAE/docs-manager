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
    docOrganization: string;
}
export type TFormProps = {
    onFinish: (data: TFormData) => void;
}