type User = {
    name: string;
    _id: string;
}

export default interface ItemsView {
    created_at: string;
    quantity: number;
    status: string;
    _id: string;
    _item: string;
    _user: User;
}