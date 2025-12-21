# iSunCloud Official

iSunCloud is a decentralized cloud infrastructure visualization platform. It provides a real-time, 3D interactive dashboard to view the global distribution of iSunCloud nodes, their resource contributions (FLOPS, Storage, RAM), and operational status.

## Features

-   **3D Globe Visualization**: Interactive WebGL-based Earth visualization showing node distribution across countries.
-   **Real-time Stats**: Dynamic statistics aggregation from live node data.
-   **Resource Monitoring**: Track global and country-specific Compute (FLOPS), Storage (TB), and RAM (GB) metrics.
-   **Responsive Design**: Fully responsive interface with mobile-friendly sidebar and controls.

## Deployment

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/CAFECA-IO/iSunCloud-official.git
    cd iSunCloud-official
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Build the project:
    ```bash
    npm run build
    ```

### Production Start

To start the server in production mode (port 80):

```bash
npm run production
```

> **Note**: Port 80 requires root privileges. You may need to run with `sudo`.

Alternatively, standard Next.js start:

```bash
npm start
```

### Auto-Redeploy Script

A helper script is available at `shell/auto_redeploy.sh` for automated updates from git.

## API Documentation

### Node Registration & Management

**Endpoint**: `GET /api/v1/nodes`

Retrieves a list of all active nodes and aggregated global statistics.

**Response**:
```json
{
  "total_nodes": 1234,
  "stats": {
    "flops": 150.5,
    "storage": 500.2,
    "ram": 10240
  },
  "countries": [ ... ],
  "nodes": [ ... ]
}
```

---

**Endpoint**: `POST /api/v1/nodes`

Registers a new node or updates an existing one. Nodes are identified by `enode`.

**Body**:
```json
{
  "id": "optional-uuid",
  "nodeInfo": {
    "enode": "enode://pubkey@ip:port",
    "networkId": 8017,
    "client": "iSunCoin/v1.12.3"
  },
  "resources": {
    "flops": 1.5, // TeraFLOPS
    "storage": 2.0, // TB
    "ram": 16 // GB
  }
}
```

-   **Expiration**: Nodes must check in at least once per hour. Nodes older than 1 hour are automatically removed.
-   **De-duplication**: If an `enode` already exists, submitting it again updates the node's timestamp and resources.
