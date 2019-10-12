import Router from "../common/router";
import App from "../app";

import {
    catalogues
} from "../controllers/catalogue-controller";

import {
    deductItems
} from "../controllers/catalogue-controller";
const router = Router(() => App);

router.route("/catalogues").get(catalogues);

router.route("/deductItems").post(deductItems);

export default router;
