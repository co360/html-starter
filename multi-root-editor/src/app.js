import MultirootEditor from './MultirootEditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

MultirootEditor
    .create({
        header: document.querySelector('#header'),
        content: document.querySelector('#content'),
        footerleft: document.querySelector('#footer-left'),
        footerright: document.querySelector('#footer-right')
    }, {
        plugins: [Essentials, Paragraph, Heading, Bold, Italic, List, Link, BlockQuote, Image, ImageCaption,
            ImageStyle, ImageToolbar, ImageUpload, Table, TableToolbar, MediaEmbed, EasyImage],
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'imageUpload', 'blockQuote',
            'insertTable', 'mediaEmbed', 'undo', 'redo'],
        image: {
            toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'],
            styles: ['full', 'alignLeft', 'alignRight']
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },
        placeholder: {
            header: 'Header text goes here',
            content: 'Type content here',
            footerleft: 'Left footer content',
            footerright: 'Right footer content'
        },
    })
    .then(newEditor => {
        document.querySelector('#toolbar').appendChild(newEditor.ui.view.toolbar.element);

        window.editor = newEditor;
    })
    .catch(err => {
        console.error(err.stack);
    });
