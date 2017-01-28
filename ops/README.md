Yes, we use docker
=================

### Running
```bash
docker-compose up
```

### Deployment
Running on ssedev.se.rit.edu, root user has a shallow clone of frontend to just have the ops directory. We're using a watchdog container that will check for changes every 5mins and update the deployments. Backend data is stored in sqlite atm.
