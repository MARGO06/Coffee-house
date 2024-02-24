import './news.css';
import { ArticlesNew } from '../../../types/types';

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
            const newsAuthor = newsClone.querySelector('.news__meta-author');
            const newsDate = newsClone.querySelector('.news__meta-date');
            const newsTitle = newsClone.querySelector('.news__description-title');
            const newsSource = newsClone.querySelector('.news__description-source');
            const newsContent = newsClone.querySelector('.news__description-content');
            const newsRead = newsClone.querySelector('.news__read-more a');

            if (newsPhoto !== null) {
                newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
            if (newsAuthor !== null) {
                newsAuthor.textContent = item.author || item.source.name;
            }
            if (newsDate !== null) {
                newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }
            if (newsTitle !== null) {
                newsTitle.textContent = item.title;
            }
            if (newsSource !== null) {
                newsSource.textContent = item.source.name;
            }
            if (newsContent !== null) {
                newsContent.textContent = item.description;
            }
            if (newsRead !== null) {
                newsRead.setAttribute('href', item.url);
            }
            fragment.append(newsClone);
        });
        const containerNews = <HTMLDivElement>document.querySelector('.news');
        containerNews.innerHTML = '';
        containerNews.appendChild(fragment);
    }
}

export default News;
