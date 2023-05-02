# metro-api
A free REST API for Metro(AZ)

Built with [Cloudflare Workers](https://workers.cloudflare.com/).

## Usage

### `GET` [https://domain.com/metro](https://api.kanye.rest)
This will get all the stations
```json
[
  {
    "id": 0,
    "station": "Hezi Aslanov",
    "howLong": 3,
    "line": "green"
  },
  {
    "id": 1,
    "station": "Ehmedli",
    "howLong": 5,
    "line": "male"
  }
]
```

### `GET` [https://domain.com/metro/[id]](https://api.kanye.rest)
This will get Metro by a specific ID.
```json
{
  "id": 0,
  "station": "Hezi Aslanov",
  "howLong": 3,
  "line": "green"
 }
```

## Development

Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/#installation)

```shell
npx wrangler dev
```
