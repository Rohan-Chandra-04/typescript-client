type CacheEntry<T> = {
    createdAt: number;
    val : T;
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined;
  #interval: number;

  constructor(reapIntervalMs: number = 60000) {
    this.#interval = reapIntervalMs;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    this.#cache.set(key, { createdAt: Date.now(), val });
  }

  get<T> (key: string): T | undefined {
    const entry = this.#cache.get(key);
    if (entry) {
      return entry.val as T;
    }
    return undefined;
  }

  #reap(){
    for (const [key, entry] of this.#cache){
        if (Date.now() - entry.createdAt > this.#interval){
            this.#cache.delete(key);
        }
    }
  }

  #startReapLoop(){
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }

  stopReapLoop(){
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}