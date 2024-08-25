export interface Trip {
    _id: string, //internal primary key in mongodb
    code: string,
    name: string,
    length: string,
    start: Date,
    resort: String,
    perPerson: string,
    image: string,
    description: string
}