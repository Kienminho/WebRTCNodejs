module.exports = {
  METERED_DOMAIN: process.env.METERED_DOMAIN || "nodejsdemo.metered.live",
  METERED_SECRET_KEY:
    process.env.METERED_SECRET_KEY ||
    "pPam9RTKWkbWbIaxaTrcETmyWNTtm0-k_Y4ITFH4A4qDbdA3",
  port: process.env.PORT || 3000,
};
