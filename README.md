# Asyncy Landing Page

[![Netlify](https://www.netlify.com/img/global/badges/netlify-dark.svg)](https://asyncy.com)


```sh
# build semantic
cd semantic/
gulp build

# to watch for changes
gulp watch
```

# Need to move this to gulp...
```sh
# build pages
make build
```


---
---
---


          <div class="ui rainbow segment">
            <h3>What are the supported microservice types?</h3>
            <p>There are three types of microservices supported by Asyncy.</p>
            <p>
              <div class="ui bulleted list">
                <div class="item">Docker Containers written in any language.</div>
                <div class="item">Single Javascript and Python files.</div>
                <div class="item">A program written in <a href="http://asyncy.click/storyscript">Storyscript</a>.</div>
              </div>
            </p>
          </div>
          <div class="ui rainbow segment">
            <h3>Who maintains the microservices?</h3>
            <p>
              The project contributures maintain the service.
              This may be open-source projects, vendor built projects, or private projects.
              To have a service compatable with Asyncy there is very litle configuration required, <a href="https://github.com/asyncy/docker-template">learn more here</a>.
            </p>
          </div>
          <div class="ui rainbow segment">
            <h3>Why is a domain-specific language?</h3>
            <p>
              We believe a syntax-light language that is highly readable is important.
              Asyncy aims to reduce complexity, so our language should represent this.
              After exploring other languages such as Node, Python, and Java we found a number of issues that required us to "think differently".
            </p>
          </div>
          <div class="ui rainbow segment">
            <h3>How difficult is it to build my own services?</h3>
            <p>
              Use any programming language necessary to build your service just like you would a library, package, or application.
              To have a service compatable with Asyncy there is very litle configuration required, <a href="https://github.com/asyncy/docker-template">learn more here</a>.
            </p>
          </div>
          <div class="ui rainbow segment">
            <h3>Can I bring my own database?</h3>
            <p>
              Yes, this is actually the only way.
              Asyncy is a platform for execution and we do not provide the underlining services.
              But we make it really easy to create them, however, you have to manage your own database.
            </p>
            <p>
              We recommend using <a href="https://www.heroku.com/postgres">Heroku Postgres</a>, <a href="https://aws.amazon.com/rds/">Amazon RDS</a>, <a href="https://redislabs.com/">RedisLabs</a> or <a href="https://www.cloudamqp.com/">CloudAMQP</a> just to name a few.
            </p>
          </div>
          <div class="ui rainbow segment">
            <h3>How much Kubernetes or devops experience is required?</h3>
            <p>
              Little to none. Asyncy interacts with Kubernetes so you don't need to.
              It manages scaling, security, routing, networks and much more.
              I konw it sounds to good to be true...but wait till you see it in action.
            </p>
          </div>
          <div class="ui rainbow segment">
            <h3>Can my Storyscripts and custom services be private code?</h3>
            <p>
              Yes, no problem. You can blend private and public source code as well.
            </p>
          </div>
          <div class="ui rainbow segment">
            <h3>How fast is the Asyncy Engine?</h3>
            <p>
              As one would expect when you move to microservices you lose some ability to execture in the same thread.
              But with proper design this difference in speed is not noticable.
              Asyncy adds very little overhead with Storyscript execution and uses the best practices to have container exeute as quickly as possible.
            </p>
          </div>
          <div class="ui rainbow segment">
            <h3>What are some current limitations to Asyncy?</h3>
            <p>
              Time-sensative HTTP traffic should not be syncronously bound to a Storyscript execution.
              This was a known limitation from the start, but comes at no supprise. Building UI pages needs to be handled
              by a threaded server. However, Asyncy des provides a "serverless" environment simular to AWS Lambda.
            </p>
          </div>
          <div class="ui rainbow segment">
            <h3>Where are Storyscript's and other code stored?</h3>
            <p>
              Asyncy relies on GitHub for many things including storing source code.
              This has significant benifits with portability, version controlling and security.
            </p>
          </div>
          <div class="ui rainbow segment">
            <h3>How are user permissions handled?</h3>
            <p>
              Asyncy relies on GitHub as user authentication and permission.
              This has significant benifits to the platform and a powerful level of security and team transparency.
              We use GitHub Teams as a granular permission scope.
            </p>
          </div>
