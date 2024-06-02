const exitSignals = /** @type {const} */ (['SIGINT', 'SIGTERM']); // 'SIGQUIT'
/**
 * @param {import("./server.js").FastifyApp} app
 * @param {typeof exitSignals[number]} reason
 */
export async function gracefulShutdown(app, reason) {
  app.log.info({ signal: reason }, `Received ${reason}, starting graceful shutdown...`);

  await app.close();

  app.log.info({ signal: reason }, `Graceful shutdown completed. Exiting process.`);
  process.exit(0);
}

/** @param {import("./server.js").FastifyApp} app */
export function handleExitSignals(app) {
  for (const signal of exitSignals) {
    process.on(signal, () => gracefulShutdown(app, signal));
  }
}
