export interface DataAccess {
    getAsync(uri: string, params: any): Promise<any>

    postAsync(uri: string): Promise<any>

    putAsync(uri: string): Promise<any>

    deleteAsync(uri: string): Promise<any>
}