module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  deploy: [
    "Fossilizer"
  ],
  rpc: {
    host: "localhost",
    port: 8545
  },
  networks: {
    "development": {
      network_id: "default"
    },
    "production": {
      network_id: 456789,
      host: "40.68.229.107",
      from: "0x007ccffb7916f37f7aeef05e8096ecfbe55afc2f"
    }
  }
};
