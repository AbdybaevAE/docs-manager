const token_key = 'token_key';
export const checkCookie = () => {
    return getToken() != null;
};
export const hasToken = () => {
    return getToken() != null;
};
export const setToken = (token: string) => {
    localStorage.setItem(token_key, token);
}
export const getToken = () => {
    return localStorage.getItem(token_key);
}
export const clearToken = () => {
    return localStorage.removeItem(token_key);
}