export interface Sala {
    ok?:      boolean;
    message?: string;
    data?:    DataSala[];
}

export interface DataSala {
    _id?:       string;
    name?:      string;
    anfitrion?: string;
    active?:    boolean;
    board?:     string;
    usuarios?:  any[];
    links?:     any[];
    __v?:       number;
}