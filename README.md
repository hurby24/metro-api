# metro-api

A free REST API for Metro(AZ)

Built with [Cloudflare Workers](https://workers.cloudflare.com/){:target="_blank"}.

## Usage

### `GET` [https://metro-az.hurby.workers.dev/metro](https://metro-az.hurby.workers.dev/metro){:target="_blank"}

This will get all the metro lines and stations

```json
[
  {
    "lines": [
      {
        "name": "purple",
        "color": "#800080",
        "stations": [
          {
            "name": "Memar Əcəmi",
            "code": "p0",
            "latitude": 40.41125,
            "longitude": 49.81421,
            "transfer": true
          },
          {
            "name": "Avtovağzal",
            "code": "p1",
            "latitude": 40.42169,
            "longitude": 49.79504
          }
        ]
      },
      {
        "name": "yellow",
        "color": "#FFFF00",
        "stations": [
          {
            "name": "Cəfər Cabbarlı",
            "code": "y0",
            "latitude": 40.37998,
            "longitude": 49.84853,
            "transfer": true
          },
          {
            "name": "Xətai",
            "code": "y1",
            "latitude": 40.38327,
            "longitude": 49.87195
          }
        ]
      }
    ]
  }
]
```

### `GET` [https://metro-az.hurby.workers.dev/metro/[line]](https://metro-az.hurby.workers.dev/metro/purple){:target="_blank"}

This will get stations that in specific metro line.

```json
[
  {
    "name": "Memar Əcəmi",
    "code": "p0",
    "latitude": 40.41125,
    "longitude": 49.81421,
    "transfer": true
  },
  {
    "name": "Avtovağzal",
    "code": "p1",
    "latitude": 40.42169,
    "longitude": 49.79504
  }
]
```

### `GET` [https://metro-az.hurby.workers.dev/metro/[line]/[code]](https://metro-az.hurby.workers.dev/metro/red/r0){:target="_blank"}

This will get station by code that in specific metro line.

```json
{
  "name": "Həzi Aslanov",
  "code": "r0",
  "latitude": 40.37314,
  "longitude": 49.9534
}
```

## Development

Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/#installation){:target="_blank"}

```shell
npx wrangler dev
```
