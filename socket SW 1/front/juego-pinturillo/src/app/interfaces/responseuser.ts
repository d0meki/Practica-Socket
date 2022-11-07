export interface ResponseUser {
    ok?:      boolean;
    message?: string;
    data?:    DataUser;
}

export interface DataUser {
    _id?:      string;
    name?:     string;
    email?:    string;
    password?: string;
    __v?:      number;
}
