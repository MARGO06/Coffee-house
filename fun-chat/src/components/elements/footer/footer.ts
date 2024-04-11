import { wrapperFooter } from '../wrapper/wrapper';
import { footerYear, schoolName } from '../text/text';
import { linkGitHub } from '../link/link';

class Footer {
  createFooter() {
    const wrapper = wrapperFooter.createElement();
    const school = schoolName.createElement();
    const year = footerYear.createElement();
    const link = linkGitHub.createElement();
    wrapper.append(school, link, year);
    return wrapper;
  }
}

export const footerChat = new Footer();
