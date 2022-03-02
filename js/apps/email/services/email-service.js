import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const emails = [
  {
    id: 'e101',
    subject: 'OMG kim is dating a new guy!!',
    body: 'Would love to catch up sometimes and then tell you all about the details',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: { name: 'Or talks', email: 'or.theteller@gmail.com' },
  },
  {
    id: 'e102',
    subject: 'Kylie gave birth to a baby boy!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: { name: 'Shelly Zacks', email: 'shellyZa@gmail.com' },
  },
  {
    id: 'e103',
    subject: 'Khole is prgo again!',
    body: 'How are you doing?Would love to catch up sometimes i think we can talk about a lot of things. and also if you like we can go grab a salad sometime.love you x0x0',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: { name: 'Kyile J', email: 'kyile.j@gmail.com' },
  },
  {
    id: 'e104',
    subject: 'Kourt is engaged!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: { name: 'Lamar ', email: 'lamar.oddom@gmail.com' },
  },
];
const EMAIL_KEY = 'emails';
_createEmails();

export const emailService = {
  query,
  remove,
  save,
  get,
  getEmptyEmail,
};

function query() {
  return storageService.query(EMAIL_KEY);
}

function remove(emailId) {
  return storageService.remove(EMAIL_KEY, emailId);
}

function get(emailId) {
  return storageService.get(EMAIL_KEY, emailId);
}

function save(email) {
  if (email.id) return storageService.put(EMAIL_KEY, email);
  else return storageService.post(EMAIL_KEY, email);
}

function getEmptyEmail() {
  return {
    id: '',
    subject: '',
    body: '',
    isRead: false,
    sentAt: '',
    to: '',
  };
}

function _createEmails() {
  var emailsToUse = utilService.loadFromStorage(EMAIL_KEY);
  if (!emailsToUse || !emailsToUse.length) {
    utilService.saveToStorage(EMAIL_KEY, emails);
  }

  return emails;
}
