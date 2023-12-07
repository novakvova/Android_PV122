import {Dispatch} from "react";
import {
    CategoryActionType, CreateCategoryActionType, DeleteCategoryActionType, EditCategoryActionType,
    ICategoryCreate, ICategoryEdit,
    ICategoryItem,
    SetCategoryActionType
} from "./types";
import http_common from "../../http_common";
import {APP_ENV} from "../../env";

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

function isValidUrl(url: string) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(url);
}

export const EditCategoryAction = async (dispatch: Dispatch<EditCategoryActionType>, model: ICategoryEdit) => {
    const formData = new FormData();
    if(isValidUrl(model.image))
        model.image="";
    else {
        formData.append("image", {
            uri: model.image,
            type: "image/jpeg",
            name: "my.jpg"
        });
    }
    console.log("Send data to edit", model);

    formData.append("name", model.name);
    formData.append("description", model.description);
    console.log("Sserver ip", APP_ENV.BASE_URL);
    const resp = await http_common.put<ICategoryItem>(`/api/categories/edit/${model.id}`,
        formData,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    // console.log("Category info create", resp.data);
    dispatch({type: CategoryActionType.EDIT_CATEGORY, payload: resp.data});
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