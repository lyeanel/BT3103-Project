<template>
    <div id="show-blogs">

        <h1 class="modsearch"><center>Module Search</center></h1>
        <div class="searchbox">
        <input type="text" v-model="search" placeholder="search module codes" class = "show-blogs"></div>
        <div v-for="mods in filteredBlogs" class="single-blog">
            <h2>{{ mods.code.toUpperCase() }}: {{mods.name.toUpperCase()}} </h2>
            <h3> Tutors: </h3>
            <div v-for="tut in mods.tutors" class="tutor-col">
                - <a href="https://www.google.com">{{tut}}</a>

                </div>
        </div>
    </div>


</template>

<script>
import db from '@/firebase/init.js'
export default {
    data () {
        return {
            blogs: [{
                title:"test",
                body:"asdasdasd",
            }],
            search: '',
            testlist: [],
        }
    },
    methods: {
    },
    created() {
        db.collection('testmodule').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'code': doc.data().code,
                    'name': doc.data().name,
                    'tutors': doc.data().tutors,
                }
                console.log('Write succeeded!');
                console.log(data);
                this.testlist.push(data);


            })
        })
    },
    computed: {
        filteredBlogs: function(){
            return this.testlist.filter(everymod => {
                return everymod.code.toUpperCase().match(this.search.toUpperCase());
            });
        }
    }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
    color:#19266e;
    
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

.searchbox {
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #f07008;
    height: 40px;
    border-radius: 60px;
    padding:10px;
    padding-left: 30px;
    padding-right: 30px;
}

.modsearch {
    padding-top: 20px;
    padding-bottom: 20px

}
</style>