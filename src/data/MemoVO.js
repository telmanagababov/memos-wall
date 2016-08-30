class MemoVO {
    constructor(initialData = {id: 0, title: "", url: "", info: ""}) {
        this.id = initialData.id;
        this.title = initialData.title;
        this.url = initialData.url;
        this.info = initialData.info;
    }
}

export default MemoVO