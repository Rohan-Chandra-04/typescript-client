export class Cache {
    #cache = new Map();
    #reapIntervalId;
    #interval;
    constructor(reapIntervalMs = 60000) {
        this.#interval = reapIntervalMs;
        this.#startReapLoop();
    }
    add(key, val) {
        this.#cache.set(key, { createdAt: Date.now(), val });
    }
    get(key) {
        const entry = this.#cache.get(key);
        if (entry) {
            return entry.val;
        }
        return undefined;
    }
    #reap() {
        for (const [key, entry] of this.#cache) {
            if (Date.now() - entry.createdAt > this.#interval) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}
