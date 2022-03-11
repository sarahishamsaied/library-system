
import { collection,getDoc,getDocs,updateDoc,addDoc,deleteDoc,doc } from "firebase/firestore"
import { cartDb } from "../../Firebase"
const cartCollectionRef = collection(cartDb,"Cart")
class CartServices{
    addToCart = (cartItem)=>{
        return addDoc(cartCollectionRef,cartItem);
    };
    getAllCartItems = ()=>{
        return getDocs(cartCollectionRef);
    };
    removeFromCart = (id)=>{
        const cartItem = doc(cartDb,"Cart",id)
        return deleteDoc(cartItem);
    };
    clearCart = (id,emptyArr)=>{
        const cartItem = doc(cartDb,"Cart",id)
        return updateDoc(cartItem,emptyArr);
    };
}
export default new CartServices();
