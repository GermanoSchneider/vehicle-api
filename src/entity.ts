export default abstract class Entity<T> {
    data: T;
    constructor(props: T) {
        this.data = props;
    }

}