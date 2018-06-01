<template>
  <div id="app">
  <label>ToDo:</label>
  <input type="text" v-model="todo"/>
  <button @click="submitToDo()">Add</button>

  <div>
    <ul>
    <li v-for="TODO of todos" v-bind:key="TODO['.key']">
    <div v-if="!TODO.edit">
    <p></p>{{TODO.todo}}</p>
    <button @click="removeToDo(TODO['.key'])">Remove</button>
    <button @click="editToDo(TODO['.key'])">Edit</button>
    </div>
    <div v-else>
    <input type="text" v-model="TODO.todo"/>
    <button @click="saveToDo(TODO)">Save</button>
    <button @click="cancelEdit(TODO['.key'])">Cancel</button>
    </div>
    </li>
    </ul>
  </div>
  </div>
</template>

<script>
import {todoRef} from './firebase';

export default {
  data () {
    return {
      todo: ''
    }
  },
    firebase: {
    todos: todoRef
  },
  methods: {
    submitToDo() {
        todoRef.push({todo: this.todo, edit: false })
        this.todo='';
    },
    removeToDo(key) {
      todoRef.child(key).remove();
    },
    editToDo(key) {
      todoRef.child(key).update({edit: true})
    },
    cancelEdit(key) {
      todoRef.child(key).update({edit: false})
    },
    saveToDo(task) {
      const key =task['.key'];
      todoRef.child(key).set({todo: task.todo})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
