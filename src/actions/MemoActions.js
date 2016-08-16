export const ADD_MEMO = "ADD_MEMO";
export const REMOVE_MEMO = "REMOVE_MEMO";

export function addMemo(data) {
    return { type: ADD_MEMO , data};
}
export function removeMemo(id) {
    return { type: REMOVE_MEMO, id}
}