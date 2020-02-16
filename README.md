# Iframe Experiment

* Server - `npm run server:start:dev` - runs on port `8080`
* SPA - `npm run start` - runs on port `3000`
* Input required page height in sidebar form to dynamically get a page of that height
* Page loads in iframe and messages the parent to set height accordingly
* Parent context sets height based on message received from child context