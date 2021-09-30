
export default interface Mapper<T, U> {
    toDTO(data: T): U
    fromDTO(data: U): T;
}