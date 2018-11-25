import http from "k6/http";
import { sleep } from "k6";

// export let options = {
//   stages: [
//      { duration: "30s", target: 20 },
//      { duration: "1m30s", target: 10  },
//      { duration: "20s", target: 0 },
//    ]
//  };

export let options = {
  vus: 10,
  duration: "30s",
  rps: 1
};

export default function() {
  let res = http.get("http://localhost:8081/projects/26/comments");
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
  sleep(1);
};