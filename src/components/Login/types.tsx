export type LoginViewProps = {
    onFormSubmit: (values: TLoginForm) => void;
}
export type TLoginForm = {
    username: string;
    password: string;
}