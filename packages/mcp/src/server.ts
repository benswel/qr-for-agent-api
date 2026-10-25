#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { tools } from "./tools.js";

/**
 * Final release of the QR for Agent MCP server.
 *
 * The hosted API shut down on 9 November 2026. This version keeps the tool
 * names so existing agent configurations get a clear answer, but it makes no
 * network calls: every tool returns the shutdown notice. Older versions call
 * api.qrforagent.com, a domain that expires on 24 February 2027.
 */
const SHUTDOWN_NOTICE =
  "QR for Agent shut down on 9 November 2026. This MCP server no longer connects to any API, and QR for Agent API keys no longer work. For a hosted QR code API, see https://ohmycode.net/api";

const server = new McpServer({
  name: "qr-for-agent",
  version: "0.13.0",
});

// Register every former tool name with the notice only: no input schema,
// so any call gets the notice instead of a validation error.
for (const name of Object.keys(tools)) {
  server.tool(
    name,
    `QR for Agent has shut down: ${name} no longer works and only returns the shutdown notice.`,
    async () => ({
      content: [{ type: "text" as const, text: SHUTDOWN_NOTICE }],
      isError: true,
    })
  );
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(SHUTDOWN_NOTICE);
}

main().catch(console.error);
