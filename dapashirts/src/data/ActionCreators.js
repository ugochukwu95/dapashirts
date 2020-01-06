import { ActionTypes, DataTypes } from "./Types";
// import { data as phData} from "./placeholderData";
import { RestDataSource } from "./RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (dataType) => ({
	type: ActionTypes.DATA_LOAD,
	payload: dataSource.GetData(dataType).then(response => ({ dataType, data: response.data}))
});

export const placeOrder = (order) => ({
	type: ActionTypes.DATA_STORE,
	payload: dataSource.StoreData(DataTypes.ORDERS, order).then(response => ({
		dataType: DataTypes.ORDERS, data: response.data}))
})
