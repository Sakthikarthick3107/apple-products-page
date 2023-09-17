<script>
import  {products} from '../components/products'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

export default {
    data(){
        return{
            products:products,
            user:'',
            currentLocation : window.location.href,
            productType : "",
            productIndex : "",
            showDetails : false,
            
        }
    },
    created(){
        const segments  = this.currentLocation.split('/');
        const last_two = segments.slice(-2);
        this.productType = last_two[0];
        this.productIndex = last_two[1];
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.user = user;
            console.log(this.user)
        } else {
            this.user = null;
            
      }
    });
       
    },
    methods:{
        sendOrder(){
            alert(`"Your product (product id :${this.productIndex} ) is ordered successfully"`)
            this.$router.push('/');
        }
    }
}
</script>

<template>
    <div  class="flex  justify-center p-6 h-full w-full  bg-neutral-100">
        <div class="block">
            <div v-for="(product , productName) in products" :key="productName" class=" my-20">
                <div v-if="productName === productType">
                    <p class="text-3xl font-semibold text-center">Order Now</p>
                    <div v-for="(prod,index) in product" :key="index" class="mt-5" >
                
                        <div class="grid lg:grid-cols-2 sm:grid-cols-1 place-items-center items-start   gap-4" v-if="prod.id === productIndex">
                            <div class="flex justify-center items-center">
                                <div class="block">
                                    <div class="flex justify-center">
                                        <img :src="prod.image" alt="img" class="h-1/4 w-1/4 cursor-pointer rounded-lg"/>
                                    </div>
                                    <div class=" ml-5">
                                        <p class="text-4xl font-semibold my-5">{{ prod.name }}</p>
                                        <hr/>                    
                                        <p class="text-2xl">Price : ₹{{ prod.off }}</p>
                                        <br/>
                                        <ul v-if="showDetails !== false">
                                            <li v-for="(detail , index) in prod.about" :key="index" class="list-disc">{{ detail }}</li>
                                        </ul>
                                        <button class="font-semibold text-l text-blue-500 :hover-text-underline my-2" v-if="showDetails===false" @click="showDetails=true">Show More</button>
                                        <button class="font-semibold text-l text-blue-500 :hover-text-underline my-2" v-else @click="showDetails=false">Show Less</button>
                                    </div>
                                </div>
                            </div>
                            <div class=" flex border  bg-slate-900 text-white w-full  rounded-md p-5">
                                <form @submit.prevent="sendOrder" class="block w-full ">
                                    <div class="flex justify-around w-full my-4" >
                                        <div class="flex justify-start">
                                            <p class="text-l">Name</p>
                                        </div>
                                        <div class="flex justify-start">
                                            <p>{{ user.displayName }}</p>
                                        </div>
                                    </div>
                                    <div class="flex justify-around w-full my-4" >
                                        <div class="flex justify-start">
                                            <p class="text-l">Email Address</p>
                                        </div>
                                        
                                        <div class="flex justify-start">
                                            <p>{{ user.email }}</p>
                                        </div>
                                        
                                    </div>
                                    <div class="flex justify-around w-full my-4" >
                                        <div class="flex justify-start">
                                            <p class="text-l ">Mobile Number</p>
                                        </div>
                                        
                                        <div class="flex justify-start">
                                            <input class="bg-yellow-400 p-2 rounded-md text-black " required type="number" name="city"/>
                                        </div>
                                        
                                    </div>
                                    <div class="flex justify-around w-full my-4" >
                                        <div class="flex justify-start">
                                            <p class="text-l">Address</p>
                                        </div>
                                        
                                        <div class="flex justify-start">
                                            <textarea class="bg-yellow-400 p-2 rounded-md text-black " required  name="address" rows="4" cols="30"></textarea>
                                        </div>
                                        
                                    </div>
                                    <div class="flex justify-around w-full my-4" >
                                        <div class="flex justify-start">
                                            <p class="text-l">City</p>
                                        </div>
                                        
                                        <div class="flex justify-start">
                                            <input class="bg-yellow-400 p-2 rounded-md text-black " required type="text" name="city"/>
                                        </div>
                                        
                                    </div>
                                    <div class="flex justify-around w-full my-4" >
                                        <div class="flex justify-start">
                                            <p class="text-l">State</p>
                                        </div>
                                        
                                        <div class="flex justify-start">
                                            <input class="bg-yellow-400 p-2 rounded-md text-black " required type="text" name="state"/>
                                        </div>
                                        
                                        
                                    </div>
                                    <div class="flex justify-center">
                                            <button  type="submit" class="h-10 w-25 px-2 font-semibold rounded-md border-2  border-white  transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">Order Now</button>
                                        </div>
                                    <p class="text-center mt-10" >Order will be delivered within two days from the day of order</p>
                                </form>
                            </div>
                
                        </div>
             
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    
</template>