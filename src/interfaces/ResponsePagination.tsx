export interface ResponsePagination {
    docs: Array<any>;
    limit: number;
    page: number;
    pages: number;
    total: number;
}