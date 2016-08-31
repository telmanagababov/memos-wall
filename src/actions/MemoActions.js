export const ADD_MEMO = "ADD_MEMO";
export const REMOVE_MEMO = "REMOVE_MEMO";
export const SET_MEMOS = "SET_MEMOS";
export const UPDATE_MEMOS = "UPDATE_MEMOS";

export function addMemo(data) {
    return { type: ADD_MEMO , data};
}
export function removeMemo(id) {
    return { type: REMOVE_MEMO, id}
}
export function setMemos(data) {
    return { type: SET_MEMOS, data}
}
export function updateMemos() {
    return { type: UPDATE_MEMOS}
}