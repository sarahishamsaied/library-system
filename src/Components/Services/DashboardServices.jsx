import { dashboardDb } from "../../Firebase";
import { getDoc,collection,updateDoc,doc, getDocs } from "firebase/firestore";
const DashboardCollectionRef = collection(dashboardDb,"Dashboard")
class DashboardServices {
    getDashboard = ()=>{
        return getDocs(DashboardCollectionRef)
    }
    updateDashboard = (id,newData)=>{
        let dashboardDoc = doc(dashboardDb,"Dashboard",id)
        console.log(dashboardDoc)
        return updateDoc(dashboardDoc,newData)
    }
    getDashboardId = async()=>{
        const {docs} = await this.getDashboard()
        console.log(docs[0].id)
        return docs[0].id;
    }

}
export default new DashboardServices();
