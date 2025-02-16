import { IBaseSpecification } from "./base.specification.interface";


export class BaseRepository<entity>{
    selectSatisfying(specification: IBaseSpecification): Promise<entity[]> {
        return specification.satisfingElementsFrom(this)
    }
}