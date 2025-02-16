export interface IBaseSpecification {
    satisfingElementsFrom(repository: any): Promise<any>;
}