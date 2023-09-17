<script>
import {products} from '../components/products.js';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
export default {
  
  data(){
    return{
      products:products,
      user:null,
    }
  },
  methods:{
    showAlertForLogin(){
      alert('You need to  login before start to purchase products')
    }
  },
  created() {
    // Add an authentication state listener to monitor changes in user authentication
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        this.user = user
      } else {
        // User is logged out
        this.user = null;
        
      }
    });
  },
  
}

</script>


<template>
  <div class="flex  justify-center p-6 h-full w-full  bg-neutral-100">
    <div class="block">
      <p class="my-10 text-center">Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.</p>
      
      <div :id="categoryName" v-for="(category, categoryName) in products" :key="categoryName" class="my-6 ">
      <p class="text-4xl font-semibold ml-10" >{{ categoryName }}</p><br/>
    
      <div class="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2  place-items-center items-start gap-4 ">
        <div v-for="(product , index) in category" :key="index" class=" items-center w-3/4 relative group  rounded-xl  border-2 bg-white">
          <div class="flex justify-center ">
            <img :src="product.image"   alt="" class="transition duration-300 ease-in-out transform scale-90 group-hover:scale-100"/>
          </div>
          <div class=" rounded-b-lg bg-slate-900 p-4 text-white  max-h-full w-full">
            <p class="text-center  text-l ">{{ product.name }}</p>
          </div>     
          

          <div class="rounded-xl absolute inset-0 bg-black bg-opacity-75 text-white text-center flex flex-col justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
            <p class="text-xl">Price: ₹{{ product.off }}</p>
            <p class="text-xl line-through dec">MRP: ₹{{ product.mrp }}</p>
            <div class="flex justify-center  mt-2">

                <button v-if="user===null" @click="showAlertForLogin" class="p-2 text-l font-semibold border-white border-2 transition duration-300 ease-in-out  w-2/3 rounded-md hover:text-red-500 hover:bg-white hover:opacity-6">
                  View Product
                </button>
                <router-link v-else :to="`/${categoryName}/${product.id}`" class="p-2 text-l font-semibold border-white border-2 transition duration-300 ease-in-out  w-2/3 rounded-md hover:text-red-500 hover:bg-white hover:opacity-6">
                  View Product
                </router-link>
            </div>
            
        </div>
        </div>
        
      </div>
      <br/><hr/>
      
    </div>
    </div>
        
  </div>
</template>

<style>
  html{
    scroll-behavior: smooth;
  }
  
</style>
