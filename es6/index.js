class Storage {
    constructor() {
      this.cachePromise = caches.open('avatars');
    }
  
    async getAvatar(name) {
      const cache = await this.cachePromise;
      return cache.match(`/avatars/${name}.jpg`);
    }
  }
  
  const storage = new Storage();