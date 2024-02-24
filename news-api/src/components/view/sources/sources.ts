import './sources.css';
import { SourcesNews } from '../../../types/types';

class Sources {
    draw(data: SourcesNews[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);
            const sourceName = sourceClone.querySelector('.source__item-name');
            const sourceItem = sourceClone.querySelector('.source__item');
            if (sourceName !== null) {
                sourceName.textContent = item.name;
            }
            if (sourceItem !== null) {
                sourceItem.setAttribute('data-source-id', item.id);
            }
            fragment.append(sourceClone);
        });

        const sourceElement = <HTMLDivElement>document.querySelector('.sources');
        sourceElement.append(fragment);
    }
}

export default Sources;
