<template>
    <div class='container'>
        <div class='card login'>
            <div class='card-body'>
                <h2 class='card-title text-center'>Login</h2>
                <form @submit.prevent="login" class='text-center'>
                    <div class = 'form-group'>
                        <input type="text" class="form-control" placeholder="Username" name="name" v-model= "name">
                        <p v-if= "errorText" class= 'text-danger'>{{errorText}}</p>
                    </div>
                    <button type='submit' class='btn btn-primary'> Log in </button>
                        
                </form>
                
            </div>
        </div>
    </div>
</template>

<script>
import database from '@/firebase/init';
export default {
    name: 'login',
    data(){
        return{
            messages:{
                name:""
            },
            errorText: null
        }
    },
    methods:{
        login(){
            if(this.name){
                this.$router.push({name: 'Chat', params: {name: this.name}});
            } else {
                this.errorText = 'Please enter a name first'
            }
        },
        addName:  function () {
          //Save item to database
          database.collection('messages').doc().set(this.messages);
          console.log('Hi')
          alert("I am in the DB .... :-) Item saved successfully")
        }
    }
}
</script>

<style>
.login{
    max-width: 450px;
    margin-top: 50px;
    display:block;
    margin-left: auto;
    margin-right: auto;
    
}
</style>