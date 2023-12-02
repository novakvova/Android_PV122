import {Dispatch} from "react";
import {
    CategoryActionType, CreateCategoryActionType, DeleteCategoryActionType,
    ICategoryCreate,
    ICategoryItem,
    SetCategoryActionType
} from "./types";
import http_common from "../../http_common";

export const SetCategoryAction = (dispatch: Dispatch<SetCategoryActionType>) => {
    http_common.get<ICategoryItem[]>("/api/categories/list")
        .then(resp => {
            const {data} = resp;
            dispatch({
                type: CategoryActionType.SET_CATEGORY_LIST,
                payload: data
            });
        });
}

export const CreateCategoryAction = async (dispatch: Dispatch<CreateCategoryActionType>, model: ICategoryCreate) => {
    const formData = new FormData();
    formData.append("image", {
        uri: model.image,
        type: "image/jpeg",
        name: "my.jpg"
    });
    formData.append("name", model.name);
    formData.append("description", model.description);
    const resp = await http_common.post<ICategoryItem>(`/api/categories/create`,
        formData,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    // console.log("Category info create", resp.data);
    dispatch({type: CategoryActionType.ADD_CATEGORY, payload: resp.data});
}

export const DeleteCategoryAction = (dispatch: Dispatch<DeleteCategoryActionType>, id: number) => {
    http_common.delete(`/api/categories/${id}`)
        .then(resp => {
            dispatch({
                type: CategoryActionType.DELETE_CATEGORY,
                payload: id
            });
        });
}