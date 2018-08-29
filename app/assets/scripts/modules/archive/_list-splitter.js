import $ from 'jquery';

class ListSplitter {
    constructor() {
        $('.split_2columns').easyListSplitter({ colNumber: 2 });
        $('.split_3columns').easyListSplitter({ colNumber: 3 });
        $('.split_4columns').easyListSplitter({ colNumber: 4, direction: 'vertical' });
        $('.split_5columns').easyListSplitter({ colNumber: 5, direction: 'vertical' });
    }
}
export default ListSplitter;