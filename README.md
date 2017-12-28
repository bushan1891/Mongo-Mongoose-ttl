# Mongo-Mongoose-ttl

# Documents can be purged based on the expires field ( this will automatically delete the chat from the collection ).

```    createdAt: { type: Date, expires: 60, default: Date.now } ```