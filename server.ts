import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
import { ApiFactory } from "https://deno.land/x/aws_api/client/mod.ts";
import { S3 } from "https://deno.land/x/aws_api/services/s3/mod.ts";

let s3: any;

function getClient() {
  if (s3) return s3;

  s3 = new ApiFactory({
    region: "us-west-2",
    credentials: {
      awsAccessKeyId: Deno.env.get("KEY") || "",
      awsSecretKey: Deno.env.get("SECRET") || "",
    },
  }).makeNew(S3);

  return s3;
}

async function listObjects(context: any) {
  const client = getClient();
  // context.objects = await client.listObjects({
  //   Bucket: "hudak.lol",
  // });
  context.response.body = await client.listObjects({
    Bucket: "hudak.lol",
  });
}

// export default () => {
//   const body = JSON.stringify({ msg: "HERE COMES THE FUTURE" });
//   return new Response(body);
// };

const app = new Application();

app.use(async (context, next) => {
  try {
    await context.send({
      root: Deno.cwd(),
      index: "index.html",
    });
  } catch {
    next();
  }
});

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(`Listening on ${hostname}:${port}`);
});

const router = new Router();
router.get("/api/objects/list", listObjects, (context: any) => {
  // console.debug(response);
  // return new Promise((resolve, reject) => {
  //   client
  //     ?.listObjects({
  //       Bucket: "hudak.lol",
  //     })
  //     .then((result: any) => {
  //       context.response.body = JSON.stringify(result);
  //       resolve(result);
  //     });
  //   // context.response.type = "application/json";
  // }).then(next);
  return listObjects(context);
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 5678 });
