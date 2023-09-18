

 
class LocalStorageService  {
  static  instance = new LocalStorageService()
 
    set(key, value) {
        localStorage.setItem(key, value);
        return true;
    }
    
    delete(key) {
        localStorage.removeItem(key);
        return true;
    } 
    
    get(key) {
        return localStorage.getItem(key);
    }
}
 
const LocalStorageServiceItems = { 
    ACCESS_TOKEN: 'access',
    REFRESH_TOKEN: 'refresh',
    USER_ID: 'user-id',
    CURRENT_LOCATION: 'location',
};


export { LocalStorageService, LocalStorageServiceItems }