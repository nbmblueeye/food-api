export interface Food {
    id: string,
    name: string,
    thumbnail: string,
    category: string
}

export interface FoodData extends Food{
    instruction: string,
    strSource: string,
    strYoutube:string,
    strArea:string,
}