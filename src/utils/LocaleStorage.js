const STATE_KEY = "MemoWall.state";

export const loadState = ()  => {
    try {
        let serializedState = localStorage.getItem(STATE_KEY);
        if(serializedState === null) {
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        let serializedState = JSON.stringify(state);
        localStorage.setItem(STATE_KEY, serializedState);
    } catch (error) {
        //ignore
    }
};