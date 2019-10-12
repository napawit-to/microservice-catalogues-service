import { ControllerDelegate } from "../common/middlewares/controller";
import App from "../app";
import { stringify } from "querystring";
export let catalogues: ControllerDelegate<{
}, {}> = {
    perform: async(request) => {
        let items = await App.database.getCatalogues();
        if (!items) {
            throw new Error("E00000001");
        }

        return {
            status: 200,
            body: {
                catalogues_list: items
            }
        };
    }
};
export let deductItems: ControllerDelegate<{
    RewardRef:string
}, {
}> = {
    expectations: {
        body: {
            RewardRef: {
                type: "string",
                required: true
            }
        }
    },
    perform: async(request) => {
        let item = await App.database.deductItem(request.body.RewardRef);
        if (!item){
            throw new Error("E00000003");
        }
        return {
            status: 200
        };
    }
};
