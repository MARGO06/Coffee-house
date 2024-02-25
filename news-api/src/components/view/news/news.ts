import './news.css';
import { ArticlesNew } from '../../../types/types';

export type ElementDom = NonNullable<HTMLElement | null | undefined>;

class News {
    draw(data: ArticlesNew[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = <HTMLTemplateElement>newsItemTemp.content.cloneNode(true);

            const newsItem = newsClone.querySelector('.news__item');
            if (idx % 2 && newsItem !== null) newsItem.classList.add('alt');

            const newsPhoto = <HTMLDivElement>newsClone.querySelector('.news__meta-photo');
            const newsAuthor: ElementDom = newsClone.querySelector('.news__meta-author')!;
            const newsDate: ElementDom = newsClone.querySelector('.news__meta-date')!;
            const newsTitle: ElementDom = newsClone.querySelector('.news__description-title')!;
            const newsSource: ElementDom = newsClone.querySelector('.news__description-source')!;
            const newsContent: ElementDom = newsClone.querySelector('.news__description-content')!;
            const newsRead: ElementDom = newsClone.querySelector('.news__read-more a')!;

            if (newsPhoto !== null) {
                newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
            newsAuthor.textContent = item.author || item.source.name;
            newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            newsTitle.textContent = item.title;
            newsSource.textContent = item.source.name;
            newsContent.textContent = item.description;
            newsRead.setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        const containerNews = <HTMLDivElement>document.querySelector('.news');
        containerNews.innerHTML = '';
        containerNews.appendChild(fragment);
    }
}

export default News;
