# Node.js Redis Docker Project

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,redis,docker,javascript,vscode&perline=5" alt="Technologies" />
</p>

## Overview

This project demonstrates a basic integration of **Node.js**, **Redis**, and **Docker**. It showcases two routes, one that directly interacts with a Redis cache and another without caching, allowing you to compare the performance and behavior of both.

## Prerequisites

Before you start, ensure that you have **Docker Desktop** installed on your machine. This is required to run the Redis container. You can download it [here](https://www.docker.com/products/docker-desktop) for both macOS and Windows.

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/Shaybush/nodejs-redis-docker.git
```

### 2. Navigate to the Project Directory

```sh
cd nodejs-redis-docker
```

### 3. Run Docker Compose

```sh
docker-compose up -d --build
```

## Usage

### Testing the Routes

You can send requests to the following routes using Postman or any other API client:

1. **Route without Redis**:

```sh
http://localhost:3001/comments/v1
```

2. **Route with Redis**:

```sh
http://localhost:3001/comments/v2
```

### Accessing Redis CLI

Once the Redis container is up, you can interact with Redis using the CLI. Follow these steps:

1. **Enter the Redis Container**:

```sh
docker exec -it redis /bin/bash
```

2. **Start the Redis CLI**:

```sh
redis-cli
```

## Basic Redis Commands

Here are some common Redis commands you can try:

- `SET [KEY] "Hello, Redis!"` – Set a key with a value.
- `GET [KEY]` – Retrieve the value of a key.
- `DEL [KEY]` – Delete a key.
- `EXISTS [KEY]` – Check if a key exists (returns 1 if true, 0 if false).
- `KEYS *` – List all keys.
- `FLUSHALL` – Remove all keys.
- `TTL [KEY]` – Get the time to live of a key in seconds (-1 for no limit).
- `EXPIRE [KEY] [TIME]` – Set an expiration time for a key.
- `SETEX [KEY] [TIME] [VALUE]` – Set a key with a value and a TTL.
- `LPUSH [KEY] [VALUE]` – Push a value to the left of a list.
- `RPUSH [KEY] [VALUE]` – Push a value to the right of a list.
- `LRANGE [KEY] [START] [STOP]` – Get a range of values from a list.
- `LPOP [KEY]` – Pop a value from the left of a list.
- `RPOP [KEY]` – Pop a value from the right of a list.
- `SADD [KEY] [VALUE]` – Add a value to a set (no duplicates allowed).
- `SMEMBERS [KEY]` – List all values in a set.
- `SREM [KEY] [VALUE]` – Remove a value from a set.
- `HSET [HASH_KEY] [KEY] [VALUE]` – Set a key-value pair in a hash.
- `HGET [HASH_KEY] [KEY]` – Get a value from a hash.
- `HGETALL [HASH_KEY]` – Get all key-value pairs from a hash.
- `HDEL [HASH_KEY] [KEY]` – Delete a key-value pair from a hash.
- `HEXISTS [HASH_KEY] [KEY]` – Check if a key exists in a hash.
- `CLEAR` – Clear the console.
- `EXIT` – Exit the Redis CLI.

## Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Redis Documentation](https://redis.io/documentation)
- [Docker Documentation](https://docs.docker.com/)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
