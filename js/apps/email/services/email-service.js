import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
};
const emails = [
  {
    id: 'e101',
    subject: 'OMG kim is dating a new guy!!',
    body: 'Would love to catch up sometimes and then tell you all about the details',
    isRead: false,
    sentAt: 1551835939,
    to: 'user@appsus.com',
    from: { name: 'Or talks', email: 'or.theteller@gmail.com' },
  },
  {
    id: 'e102',
    subject: 'Kylie gave birth to a baby boy!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551835939,
    to: 'user@appsus.com',
    from: { name: 'Shelly Zacks', email: 'shellyZa@gmail.com' },
  },
  {
    id: 'e103',
    subject: 'Khole is prego again!',
    body: 'How are you doing?Would love to catch up sometimes i think we can talk about a lot of things. and also if you like we can go grab a salad sometime.love you x0x0',
    isRead: false,
    sentAt: 1551234564,
    to: 'user@appsus.com',
    from: { name: 'Kyile J', email: 'kyile.j@gmail.com' },
  },
  {
    id: 'e104',
    subject: 'Kourt is engaged!!!!!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551836739,
    to: 'momo@momo.com',
    from: { name: 'Lamar ', email: 'lamar.oddom@gmail.com' },
  },
  {
    id: 'e105',
    subject: 'Kylie gave birth to a baby boy!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551835939,
    to: 'user@appsus.com',
    from: { name: 'Shelly Zacks', email: 'shellyZa@gmail.com' },
  },
  {
    id: 'e106',
    subject: 'Khole is prego again!',
    body: 'How are you doing?Would love to catch up sometimes i think we can talk about a lot of things. and also if you like we can go grab a salad sometime.love you x0x0',
    isRead: false,
    sentAt: 1551234564,
    to: 'user@appsus.com',
    from: { name: 'Kyile J', email: 'kyile.j@gmail.com' },
  },
  {
    id: 'e107',
    subject: 'Kourt is engaged!!!!!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551836739,
    to: 'momo@momo.com',
    from: { name: 'Lamar ', email: 'lamar.oddom@gmail.com' },
  },
  {
    id: 'e108',
    subject: 'Khole is prego again!',
    body: 'How are you doing?Would love to catch up sometimes i think we can talk about a lot of things. and also if you like we can go grab a salad sometime.love you x0x0',
    isRead: false,
    sentAt: 1551234564,
    to: 'user@appsus.com',
    from: { name: 'Kyile J', email: 'kyile.j@gmail.com' },
  },
  {
    id: 'e109',
    subject: 'Kourt is engaged!!!!!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551836739,
    to: 'momo@momo.com',
    from: { name: 'Lamar ', email: 'lamar.oddom@gmail.com' },
  },
  {
    id: 'e110',
    subject: 'Khole is prego again!',
    body: 'How are you doing?Would love to catch up sometimes i think we can talk about a lot of things. and also if you like we can go grab a salad sometime.love you x0x0',
    isRead: false,
    sentAt: 1551234564,
    to: 'user@appsus.com',
    from: { name: 'Kyile J', email: 'kyile.j@gmail.com' },
  },
  {
    id: 'e111',
    subject: 'Khole is prego again!',
    body: 'How are you doing?Would love to catch up sometimes i think we can talk about a lot of things. and also if you like we can go grab a salad sometime.love you x0x0',
    isRead: false,
    sentAt: 1551234564,
    to: 'user@appsus.com',
    from: { name: 'Kyile J', email: 'kyile.j@gmail.com' },
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
  update,
};
function update(updatedEntity) {
  storageService.put(EMAIL_KEY, updatedEntity);
}
function query(filter = null) {
  if (!filter) return storageService.query(EMAIL_KEY);
  return storageService.query(EMAIL_KEY).then((emails) => filterby(emails, filter));
}

function filterby(emails, filter) {
  if (filter.txt) {
    // email.isRead === filter.isReadnow &&
    var regex = new RegExp(filter.txt, 'i');
  } else {
    var regex = new RegExp('', 'i');
  }
  var emailsBeforeFil = emails;
  console.log(filter.status);
  if (filter.isReadnow === '1') {
    if (filter.status === 'inbox') {
      var result = emailsBeforeFil.filter((email, indx) => {
        return (
          loggedinUser.email === email.to &&
          (regex.test(email.subject) || regex.test(email.from.name) || regex.test(email.body))
        );
      });
    } else if (filter.status === 'sent') {
      var result = emailsBeforeFil.filter((email) => {
        return (
          loggedinUser.email !== email.to &&
          (regex.test(email.subject) || regex.test(email.from.name) || regex.test(email.body))
        );
      });
    }
  } else {
    if (filter.status === 'inbox') {
      var result = emailsBeforeFil.filter((email, indx) => {
        console.log(`${email.isRead}` === filter.isReadnow);
        return (
          loggedinUser.email === email.to &&
          filter.isReadnow === `${email.isRead}` &&
          (regex.test(email.subject) || regex.test(email.from.name) || regex.test(email.body))
        );
      });
    }
    //  else if (filter.status === 'sent') {
    //   var result = emailsBeforeFil.filter((email) => {
    //     return (
    //       loggedinUser.email !== email.to &&
    //       filter.isReadnow === `${email.isRead}` &&
    //       (regex.test(email.subject) || regex.test(email.from.name) || regex.test(email.body))
    //     );
    //   });
    // }
  }
  console.log(result);
  return result;
}

function remove(emailId) {
  return storageService.remove(EMAIL_KEY, emailId);
}

function get(emailId) {
  return storageService.get(EMAIL_KEY, emailId);
}

function save(email) {
  // if (email.id) return storageService.put(EMAIL_KEY, email);
  // else {
  // email.id = utilService.makeId();
  email.from.name = loggedinUser.fullname;
  email.from.email = loggedinUser.email;
  email.sentAt = new Date().getTime() / 1000;
  return storageService.post(EMAIL_KEY, email);
  // }
}

function getEmptyEmail() {
  return {
    id: '',
    subject: '',
    body: '',
    isRead: false,
    sentAt: '',
    to: '',
    from: { name: '', email: '' },
  };
}

function _createEmails() {
  var emailsToUse = utilService.loadFromStorage(EMAIL_KEY);
  if (!emailsToUse || !emailsToUse.length) {
    utilService.saveToStorage(EMAIL_KEY, emails);
  }

  return emails;
}
