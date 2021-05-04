export default interface QuizzesInterface {
    _id?: string;
    title: string;
    description: string;
    secret_code?: string;
    lux: number;
    resources: number;
    start_time: Date;
    end_time: Date;
    alternative_a: string;
    alternative_b: string;
    alternative_c: string;
    alternative_d: string;
    alternative_e: string;
    correct_answer: string;
    is_public: boolean | string;
    single_answer: boolean | string;
}