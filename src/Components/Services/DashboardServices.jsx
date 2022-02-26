import { dashboardDb } from "../../Firebase";
import { getDoc,collection,updateDoc,doc, getDocs } from "firebase/firestore";
const DashboardCollectionRef = collection(dashboardDb,"Dashboard")
class DashboardServices {
    getDashboard = ()=>{
        return getDocs(DashboardCollectionRef)
    }
    updateDashboard = (id,newData)=>{
        let dashboardDoc = doc(dashboardDb,"Dashboard",id)
        return updateDoc(dashboardDoc,newData)
    }
}
export default new DashboardServices();
