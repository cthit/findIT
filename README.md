# FindIT: Portal site for \*.chalmers.it digital services

## To run docker for dev

```
$ docker-compose up --build
```

## To run docker for prod

```
$ docker-compose -f prod.docker-compose.yml up --build
```

## Modifying data

To modify any data about the services, edit `service.json` files in `src/`

Service have the following structure

```
  {
    "title": "service-name",
    "url": "link to service",
    "description": "A short description explaining why this service is neat.",
    "github_url": "Link to github repository. But if it doesn't have a github repo, leave this field empty. I.E *""* ",
    "fontawesome_icon": ""
  },
```
