export interface ICategoryItem
{
    id: number;
    name: string;
    image: string;
    description: string
}

export interface ICategoryCreate
{
    name: string;
    image: string;
    description: string
}

export interface  ICategoryReducer {
    list: ICategoryItem[]
}

export enum CategoryActionType {
    SET_CATEGORY_LIST = "SET_CATEGORY_LIST",
    ADD_CATEGORY="ADD_CATEGORY",
}
//Задать новий набір елементів списку категорій
export interface SetCategoryAction {
    type: CategoryActionType.SET_CATEGORY_LIST,
    payload: ICategoryItem[]
}
//Додать нову категорію
export interface AddCategoryAction {
    type: CategoryActionType.ADD_CATEGORY,
    payload: ICategoryItem
}

export type CategoryActions = SetCategoryAction | AddCategoryAction;