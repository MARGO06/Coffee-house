import '../global.css';
import '../components/view/sources/sources.css';

import { ElementDom } from '../components/view/news/news';

const body: ElementDom = document.querySelector('body')!;
const button: ElementDom = document.querySelector('.btn')!;
const sourceItems: ElementDom = document.querySelector('.sources')!;
const linkAuthor: ElementDom = document.querySelector('.link__author')!;

export function changeTheme() {
    button.addEventListener('click', (e) => {
        e.preventDefault;
        button.classList.toggle('active');
        body.classList.add('active');
        sourceItems.classList.add('active');
        linkAuthor.classList.add('active');

        if (!button.classList.contains('active')) {
            button.classList.remove('active');
            body.classList.remove('active');
            sourceItems.classList.remove('active');
            linkAuthor.classList.remove('active');
        }
    });
}
