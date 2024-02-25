import './sources.css';
import { SourcesNew } from '../../../types/types';
import { ElementDom } from '../news/news';

class Sources {
    draw(data: SourcesNew[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);
            const sourceName: ElementDom = sourceClone.querySelector('.source__item-name')!;
            const sourceItem: ElementDom = sourceClone.querySelector('.source__item')!;

            sourceName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourceElement = <HTMLDivElement>document.querySelector('.sources');
        sourceElement.append(fragment);
        console.log(data);
    }
}

export default Sources;
