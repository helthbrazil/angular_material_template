export class NoteItem {
    content: string;
    createdAt: string;
    id: number;
    title: string;
    updatedAt: string;
    tituloDialog: string;

    constructor(id: number, content: string, title: string) {
        this.id = id;
        this.content = content;
        this.title = title;
    }

}
