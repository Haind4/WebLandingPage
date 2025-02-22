import { axiosGET } from "../../Helper/TypeAxios";
import { urlParseParams } from "../../Helper/helpFunction";

const routerRoot = "/objects";

export default class News {
    getList(data) {
        const stringUrl = urlParseParams(data);
        return axiosGET("https://api.cosmicjs.com/v3/buckets/backend-dev-production/", `${routerRoot}?${stringUrl}`);
    }
}
