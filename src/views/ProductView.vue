<script>
import  {products} from '../components/products'
import { cart } from '@/components/cart';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

export default{
    data(){
        return{
            products :  products,
            currentLocation : window.location.href,
            productType : "",
            productIndex : "",
            cart : cart,
            user:null,
            //cartDetails : null
        }
    },
    methods:{
        addToCart(prod){
            this.cart.push(prod)
            console.log(this.cart)
        },
        removeFromCart(itemId){
        this.cart = this.cart.filter((item,ind) => ind !== itemId)
    },
    //     addCart(prod) {
    //   if (this.user) {
    //     const userUid = this.user.uid;
    //     const database = firebase.database();
    //     const userRef = database.ref('users').child(userUid);

    //     // Create the user directory with the provided name, price, and details object
    //     userRef.set({
    //       cartitems : prod
    //     }).then(() => {
    //       console.log('User directory created successfully.');
    //       // Fetch and update user details automatically after creating the directory
    //       this.fetchUserDetails();
    //     }).catch((error) => {
    //       console.error('Error creating user directory:', error.message);
    //     });
    //   }
    // },
    // fetchUserDetails() {
    //   if (this.user) {
    //     const userUid = this.user.uid;
    //     const database = firebase.database();
    //     const userRef = database.ref('users').child(userUid);

    //     // Fetch user details from the database
    //     userRef.once('value')
    //       .then((snapshot) => {
    //         this.userDetails = snapshot.val();
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching user details:', error.message);
    //       });
    //   }
    // },
    // mounted() {
    // // Automatically fetch user details when the component is mounted
    //     this.fetchUserDetails();
    // },
    },
    created(){
        const segments  = this.currentLocation.split('/');
        const last_two = segments.slice(-2);
        this.productType = last_two[0];
        this.productIndex = last_two[1];
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.user = user;
            // Fetch user details automatically when the user is authenticated
            // this.fetchUserDetails();
        } else {
            this.user = null;
            // this.userDetails = null;
      }
    });
        
    },
    
}

</script>
<template>
    <div  class="flex  justify-center p-6 h-full w-full  bg-neutral-100">
    <div class="block">
    <div v-for="(product , productName) in products" :key="productName" class=" my-20">
        <div v-if="productName === productType">
            <p class="text-3xl font-semibold text-center">Category : {{ productName }}</p>
        <div v-for="(prod,index) in product" :key="index" class="mt-5" >
                
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 place-items-center items-start gap-4 " v-if="prod.id === productIndex">
                <div class="flex justify-center items-center">
                    <img :src="prod.image" alt="img" class="h-3/4 w-3/4 cursor-pointer rounded-lg"/>
                </div>
                <div class="p-4">
                    <p class="text-4xl font-semibold my-5">{{ prod.name }}</p>
                    <hr/>                    
                    <p class="line-through text-xl"> ₹{{ prod.mrp }}</p>
                    <p class="text-2xl">Price : ₹{{ prod.off }}</p>
                    <p>Inclusive of all taxes</p>
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  place-items-center gap-2 my-10">
                       
                        <router-link :to="`/checkout/${productName}/${prod.id}`" class="h-10 w-full p-2 transition duration-200 hover:bg-yellow-400 rounded-md bg-yellow-500 text-white font-semibold text-center"> Buy Now</router-link> 
                        
                        <button @click="addToCart(prod)" class="h-10 w-full p-2 transition duration-200 hover:bg-slate-700 bg-black text-white font-semibold rounded-md">Add to cart</button>
                    </div>
                    <p class="text-xl">About this item</p><br/>
                    <ul>
                        <li v-for="(detail , index) in prod.about" :key="index" class="list-disc">{{ detail }}</li>
                    </ul>
                </div>
                
            </div>
             
        </div>
        </div>
    </div>
    <!-- <div v-if="user" class="grid grid-cols-3 items-start place-items-center gap-4" id="mycart">
        <div v-if="cartDetails" class="  w-3/4 relative group  rounded-xl  border-2 bg-white">
        
          <div class="flex justify-center ">
            <img :src="cartDetails.image"   alt="" class="transition duration-300 ease-in-out transform scale-90 group-hover:scale-100"/>
          </div>
          <div class="rounded-b-lg bg-slate-900 p-4 text-white  max-h-full w-full">
            <p class="text-center  text-l ">{{ cartDetails.name }}</p>
          </div>     
          
          
          <div class="rounded-xl absolute inset-0 bg-black bg-opacity-75 text-white text-center flex flex-col justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
            <p class="text-xl">Price: ₹{{ cartDetails.off }}</p>
            <p class="text-xl line-through dec">MRP: ₹{{ cartDetails.mrp }}</p>
            <div class="flex justify-center  mt-2">

            <button @click="removeFromCart(cartDetails.index)"  class="p-2 text-l font-semibold border-white border-2 transition duration-300 ease-in-out  w-2/3 rounded-md hover:text-red-500 hover:bg-white hover:opacity-6">
                Remove
            </button>
        </div>
         
        </div>
    </div>
    </div> -->
    <div v-if="cart.length>0" class="text-center text-xl font-semibold mb-10">My Cart</div>
    <div  class="grid grid-cols-3 items-start place-items-center gap-4" id="mycart">
        <div v-for="(prod , index) in cart" :key="index" class="  w-3/4 relative group  rounded-xl  border-2 bg-white">
        
          <div class="flex justify-center ">
            <img :src="prod.image"   alt="" class="transition duration-300 ease-in-out transform scale-90 group-hover:scale-100"/>
          </div>
          <div class="rounded-b-lg bg-slate-900 p-4 text-white  max-h-full w-full">
            <p class="text-center  text-l ">{{ prod.name }}</p>
          </div>     
          
          
          <div class="rounded-xl absolute inset-0 bg-black bg-opacity-75 text-white text-center flex flex-col justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
            <p class="text-xl">Price: ₹{{ prod.off }}</p>
            <p class="text-xl line-through dec">MRP: ₹{{ prod.mrp }}</p>
            <div class="flex justify-center  mt-2">

            <button @click="removeFromCart(index)"  class="p-2 text-l font-semibold border-white border-2 transition duration-300 ease-in-out  w-2/3 rounded-md hover:text-red-500 hover:bg-white hover:opacity-6">
                Remove
            </button>
        </div>
         
        </div>
    </div>
    
    </div>
    <div v-if="cart.length>0" class="flex justify-center mt-5">
    <button  class="h-10 w-25 px-2 font-semibold rounded-md border-2  border-gray-900  transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">Check Out</button>
  </div>
    </div>
</div>
</template>