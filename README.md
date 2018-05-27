# FindIT: Portal site for \*.chalmers.it digital services

## To run docker for dev

```
$ docker-compose -f docker-compose.yaml up --build
```

## To run docker for prod

```
$ docker-compose -f prod.docker-compose.yaml up --build
```

## Modifying data

To modify any data about the services, edit `services.json` files in `src/`

Service have the following structure

```
  "service": {
    "title": "service",
    "url": "link to service",
    "description": "A short description explaining why this service is neat.",
    "github_url": "link to github repository but if it doesn't have a github repo leave this field empty. I.E *""* ",
    "fontawesome_icon": ""
  },
```
