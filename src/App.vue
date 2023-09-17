<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiShoppingOutline } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
 
export default{
  components: {
    SvgIcon
  },
  data(){
    return{
      path: mdiShoppingOutline,
      accLogo : mdiAccountCircle,
      user:null,
      
    }
    
  },
  methods:{
    async signInWithGoogle(){
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await firebase.auth().signInWithPopup(provider);
        // You are now signed in with Google
        console.log(res)
        //this.user = res.additionalUserInfo.profile.name
        this.user = user
        console.log(this.user)
      } catch (error) {
        console.error(error.message);
      }
    },
    async signOut() {
      try {
        await firebase.auth().signOut();
        this.user=null
        // User is signed out
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  created() {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        
        this.user = user
      } else {
        
        this.user = null;
        
      }
    });
  },
}

</script>
  
  
  <template>
  
  <div class="h-14 w-full bg-yellow-400 text-black fixed flex items-center  justify-between gap-10 z-10">
    <div class=" w-1/4"></div>
    <div class="flex flex-1 justify-center gap-5 w-2/4">
      <router-link to="/" class="font-semibold transition ease-in-out text-xl duration-300 transform scale-90 hover:scale-105 hover:cursor-pointer" href="#">Home</router-link>
      <a class="font-semibold transition ease-in-out text-xl duration-300 transform scale-90 hover:scale-105 hover:cursor-pointer" href="#iPhones">iPhone</a>  
      <a class="font-semibold transition ease-in-out text-xl duration-300 transform scale-90 hover:scale-105 hover:cursor-pointer" href="#Watches">Watch</a>
      <a class="font-semibold transition ease-in-out text-xl duration-300 transform scale-90 hover:scale-105 hover:cursor-pointer" href="#MacBook">Mac</a> 
      <a class="font-semibold transition ease-in-out text-xl duration-300 transform scale-90 hover:scale-105 hover:cursor-pointer" href="#iPad">iPad</a> 
      <a class="font-semibold transition ease-in-out text-xl duration-300 transform scale-90 hover:scale-105 hover:cursor-pointer" href="#AirPods">AirPods</a>
      <a href="#mycart"><svg-icon type="mdi" :path="path" class="font-semibold transition ease-in-out text-xl duration-300 transform scale-90 hover:scale-105 hover:cursor-pointer" ></svg-icon></a>
    </div>
    <div class="w-1/4 flex justify-end">
      <button @click="signInWithGoogle" v-if="user===null"   class="h-10 w-20 mr-5 font-semibold rounded-md border-2  border-gray-900 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">Login</button>
      <div v-else class="flex items-center">
        <p class="font-semibold mr-2 flex gap-2">
          <svg-icon type="mdi" :path="accLogo" class="font-semibold transition ease-in-out text-xl duration-300 transform scale-90 hover:scale-105 hover:cursor-pointer"></svg-icon>
          {{ user.displayName }}
        </p>
        <button @click="signOut"    class="h-10 w-20 font-semibold rounded-md border-2 mr-5 border-gray-900  transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">Logout</button>
      </div>
      
    </div>
  </div>
  
  <router-view/>
  
</template>



<style>


</style>
