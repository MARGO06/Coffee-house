import { Element, ElementPage } from '../element';

import './wrapper.css';

const loginWrapper: ElementPage = {
  tag: 'div',
  class: 'login_wrapper',
};

const modalWrapper: ElementPage = {
  tag: 'div',
  class: 'modal_wrapper',
};

const modalWindow: ElementPage = {
  tag: 'div',
  class: 'modal_window',
};

const modalBackground: ElementPage = {
  tag: 'div',
  class: 'modal_background',
};

const mainWrapper: ElementPage = {
  tag: 'div',
  class: 'main_wrapper',
};

const headerWrapper: ElementPage = {
  tag: 'header',
  class: 'main_header',
};

const userWrapper: ElementPage = {
  tag: 'section',
  class: 'field',
};

const footerWrapper: ElementPage = {
  tag: 'footer',
  class: 'main_footer',
};

const leftWrapper: ElementPage = {
  tag: 'div',
  class: 'main_left',
};

const rightWrapper: ElementPage = {
  tag: 'div',
  class: 'main_right',
};

const destinationWrapper: ElementPage = {
  tag: 'div',
  class: 'main_destination',
};

const allUsersWrapper: ElementPage = {
  tag: 'div',
  class: 'main_users',
};

const fieldMessage: ElementPage = {
  tag: 'div',
  class: 'main_field-message',
};

const sendMessage: ElementPage = {
  tag: 'div',
  class: 'main_message-send',
};

const scrollField: ElementPage = {
  tag: 'div',
  class: 'main_scroll-field',
};

const datesWrapper: ElementPage = {
  tag: 'div',
  class: 'message_dates',
};

const statusWrapper: ElementPage = {
  tag: 'div',
  class: 'message_status',
};

const aboutWrapper: ElementPage = {
  tag: 'div',
  class: 'about_wrapper',
};

const aboutInformation: ElementPage = {
  tag: 'div',
  class: 'about_information',
};

const separatorMessages: ElementPage = {
  tag: 'div',
  class: 'separator',
};

const unreadMessages: ElementPage = {
  tag: 'div',
  class: 'unread_messages unread',
};

class Wrapper extends Element {
  constructor(element: ElementPage) {
    super(element);
  }
  createElement() {
    return super.createElement();
  }
}

export const wrapperLogin = new Wrapper(loginWrapper);
export const wrapperModal = new Wrapper(modalWrapper);
export const windowModal = new Wrapper(modalWindow);
export const backgroundModal = new Wrapper(modalBackground);
export const wrapperMain = new Wrapper(mainWrapper);
export const wrapperHeader = new Wrapper(headerWrapper);
export const wrapperUser = new Wrapper(userWrapper);
export const wrapperFooter = new Wrapper(footerWrapper);
export const wrapperLeft = new Wrapper(leftWrapper);
export const wrapperRight = new Wrapper(rightWrapper);
export const wrapperDestination = new Wrapper(destinationWrapper);
export const usersWrapper = new Wrapper(allUsersWrapper);
export const messageField = new Wrapper(fieldMessage);
export const messageSend = new Wrapper(sendMessage);
export const fieldScroll = new Wrapper(scrollField);
export const wrapperDates = new Wrapper(datesWrapper);
export const wrapperStatus = new Wrapper(statusWrapper);
export const wrapperAbout = new Wrapper(aboutWrapper);
export const informationAbout = new Wrapper(aboutInformation);
export const lineSeparator = new Wrapper(separatorMessages);
export const messagesUnread = new Wrapper(unreadMessages);
