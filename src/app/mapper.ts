
export default abstract class Mapper<T, U> {
    abstract toDTO(data: T): U
    abstract fromDTO(data: U): T;
}