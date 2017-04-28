# Webstaff internship assignment

**Amod Kumar Choudhary**<br>
**3rd year B.Tech Undergrad | Indian Institute of Technology Mandi**

### Steps followed:

1. Generate `node` application using `express-generator`:

```
express --view=pug src
```

2. Update `package.json`.
3. Customize main app page (`index.pug`), add button and text.
4. Integrate app with `socket.io` to recieve and emit events and show text on screen.
5. Create a `Dockerfile` with `node` pre-installed.

## Command for running
```
docker run -p PORT:3000 -d node-app
```

Where `PORT` is the system port on which we need to run the app(for instance 80).

Then in the browser, we can type: `localhost:PORT`, where `PORT` is the same port which was used in the `docker` command.
