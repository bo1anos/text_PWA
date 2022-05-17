import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const dataJate = await openDB('jate',1);
  const rw = dataJate.transaction('jate','readwrite');
  const store = rw.objectStore('jate');
  const request = await store.put({id:1 ,value:content});
  const result = await request;
  console.log('data saved to the database',result)
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const dataJate = await openDB('jate',1);
  const rw = dataJate.transaction('jate','readwrite');
  const store = rw.objectStore('jate');
  const result = await store.getALl();
  console.log('data saved to the database',result)
};

initdb();
