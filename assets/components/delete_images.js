class ImageList {
    render() {
        const itemsHtml = this.references.map(reference => {
            return `
                <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${reference.id}">
                    <span>
                        <a href="/admin/article/references/${reference.id}/download" class="btn btn-link btn-sm"><span class="fa fa-download" style="vertical-align: middle"></span></a>
                        <button class="js-reference-delete btn btn-link btn-sm"><span class="fa fa-trash"></span></button>
                    </span>
                </li>
            `
        });
    }
    constructor($element) {
        this.$element.on('click', '.js-reference-delete', (event) => {
            this.handleReferenceDelete(event);
        });
    }
    handleReferenceDelete(event) {
        const $li = $(event.currentTarget).closest('.list-group-item');
        const id = $li.data('id');
        $li.addClass('disabled');
        $.ajax({
            url: '/admin/article/references/' + id,
            method: 'DELETE'
        }).then(() => {
            this.references = this.references.filter(reference => {
                return reference.id !== id;
            });
            this.render();
        });
    }
}