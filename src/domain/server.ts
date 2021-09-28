export default interface Server {
    on({method, url, fn}: {method: string, url: string, fn: any}): Promise<void>;
}