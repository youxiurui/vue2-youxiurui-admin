<template>
  <div class="btn-auth">
    <input type="text" v-model="person.name"><br>
    <input type="text" v-model="person.age"><br>
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="(p, index) in persons" :key="index">
        <!-- <input type="text" :placeholder="p.name"> -->
        {{ p.name }}---{{ p.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [
        {
          name: 'you',
          age: 20
        },
        {
          name: 'you',
          age: 20
        },
        {
          name: 'you',
          age: 20
        },
      ],
      person:{
        name:'',
        age:''
      }
    }
  },
  methods:{
    addPerson(){
      const p=JSON.parse(JSON.stringify(this.person))
      this.persons.unshift(p)
      this.person.name=''
      this.person.age=''
    }
  }
}

</script>

<style scoped>
.btn-auth {
  width: 100%;
  height: 1400px;
}
</style>
