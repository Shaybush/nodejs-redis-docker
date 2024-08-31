# Redis With Node JS

- Must download docker desktop if you are using mac or windows. (docker desktop is out deamon)

1. run docker-compose:
   ```sh
   docker-compose up -d --build
   ```
2. get into container:
   ```sh
   docker exec -it redis /bin/bash
   ```
3. get into container:
   ```sh
   redis-cli
   ```

## basics commands

- SET [KEY] "Hello, Redis!" --> set key
- GET [KEY] --> get key
- DEL [KEY] --> delete key
- EXISTS [KEY] --> return 0/1
- KEYS \* --> provide all the exisiting keys
- flushall --> remove all the current keys
- ttl [KEY] --> will present the time to live in seconds (-1 = without limit)
- expire [KEY] [TIME] --> set an expired time for key
- setex [KEY] [TIME] [VALUE] --> set the name with TTL
- lpush [KEY] [VALUE] --> left push (as an array)
- rpush [KEY] [VALUE] --> right push (as an array)
- lrange [KEY] [NUMBER] [NUMBER] --> example lrange frineds 0 -1 this is the way to get array
- LPOP [KEY] -> pop the left value
- RPOP [KEY] -> pop the right value
- SADD [KEY] [VALUE] --> add to the Set value which means no duplicates values (returns 1 if succeseed)
- SMEMBERS [KEY] --> shows all the values inside the current key
- SREM [KEY] [VALUE] --> remove value from Set
- HSET [HASH_KEY] [KEY] [VALUE] -> multiple key value, it reacts like an hashMap
- HGET [HASH_KEY] [KEY] -> get the selected KEY VALUE
- HGETALL [HASH_KEY] --> get all the hashMap key values in range of KEY first then VALUE
- HDEL [HASH_KEY] [KEY] --> delete selected KEY and the VALUE
- HEXISTS [HASH_KEY] [KEY] --> check if key exists 1=true 0=false
- clear --> clear the console
- exit --> exit the cli
