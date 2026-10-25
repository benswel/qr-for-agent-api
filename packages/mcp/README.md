# qr-for-agent

**QR for Agent shut down on 9 November 2026.**

This package was the MCP server for the QR for Agent API. The hosted API at api.qrforagent.com is closed and QR for Agent API keys no longer work.

Version 0.13.0 is the final release. It makes no network calls: every tool returns the shutdown notice, so agents that still have it configured get a clear answer instead of a connection error. Versions 0.12.2 and older call api.qrforagent.com, a domain that expires on 24 February 2027. Remove the server from your MCP configuration, or pin 0.13.0.

For a hosted QR code API, see [ohmycode.net/api](https://ohmycode.net/api).

The source stays available in the archived repository [benswel/qr-for-agent-api](https://github.com/benswel/qr-for-agent-api) under the MIT license.
