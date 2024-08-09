FROM redis:alpine

# Set the working directory
WORKDIR /usr/local/etc/redis

# ENV REDIS_CONFIG_FILE /usr/local/etc/redis/redis.conf

# Copy custom configuration file into the container
COPY redis.conf /usr/local/etc/redis/redis.conf
COPY ./scripts /scripts


# Expose the default Redis port
EXPOSE 6379

ENV PATH="/scripts:$PATH"

# Start Redis with the custom configuration
CMD ["redis_server.sh"]