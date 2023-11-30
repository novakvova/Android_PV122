import {CategoryActionType, ICategoryItem, ICategoryReducer} from "./types";

const init: ICategoryReducer = {
    list: []
};

export const CategoryReducer = (state = init, action: any): ICategoryReducer => {
    switch(action.type) {
        case CategoryActionType.SET_CATEGORY_LIST: {
            const list = action.payload as Array<ICategoryItem>;
            return {
                ...state,
                list
            }
        }
    }
    return state;
}
