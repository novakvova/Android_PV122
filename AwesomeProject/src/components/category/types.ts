export interface ICategoryItem
{
    id: number;
    name: string;
    image: string;
    description: string
}

export interface  ICategoryReducer {
    list: ICategoryItem[]
}

export enum CategoryActionType {
    SET_CATEGORY_LIST = "SET_CATEGORY_LIST"
}