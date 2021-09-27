export default abstract class Mapper<T> {
    readonly data: T;
    constructor(data: T) {
        this.data = data;
    }
    abstract toDTO(): any;
    abstract fromDTO(dto: any): T;
}