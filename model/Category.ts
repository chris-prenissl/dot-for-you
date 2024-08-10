import type {CategoryImage} from "~/model/CategoryImage";

export type Category = {
    title: string,
    coverImgUrl: string,
    images: Array<CategoryImage>,
    description: string
}