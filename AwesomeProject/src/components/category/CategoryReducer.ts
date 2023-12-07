import {CategoryActions, CategoryActionType, ICategoryItem, ICategoryReducer} from "./types";

const init: ICategoryReducer = {
    list: []
};

export const CategoryReducer = (state = init, action: CategoryActions): ICategoryReducer => {
    switch(action.type) {
        case CategoryActionType.SET_CATEGORY_LIST: {
            return {
                ...state,
                list: action.payload
            }
        }
        case CategoryActionType.ADD_CATEGORY: {
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        }

        case CategoryActionType.EDIT_CATEGORY: {
            //Update item
            return {
                ...state,
                list: state.list.map(item =>
                    item.id === action.payload.id ? { ...item, ...action.payload } : item
                )
            };
        }

        case CategoryActionType.DELETE_CATEGORY: {
            return {
                ...state,
                list: state.list.filter(x=>x.id!=action.payload)
            };
        }
    }
    return state;
}
