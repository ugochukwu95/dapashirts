import Axios from "axios";
import {RestUrls} from "./Urls";

export class RestDataSource {
	GetData = (dataType) => this.SendRequest("get", RestUrls[dataType]);

	StoreData = (dataType, data) => this.SendRequest("post", RestUrls[dataType], data);
	
	SendRequest = (method, url, data) => Axios.request({ method, url, data });
}