export default interface ItemInterface {
    _id?: string;
    title: string;
    description: string;
    quantity: number;
    value: number;
    start_time: string;
    end_time: string;

    active?: boolean;
    created_at?: string;
    has_audio?: boolean;
    has_image?: boolean;
    has_text?: boolean;
    has_video?: boolean;
    id?: string;
    image?: string;
    isCreatedByMission?: boolean;
    users?: Array<string>;
    _user?: string;
}