import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/* eslint-disable no-new */
export default new Vuex.Store({
    state:{
        lists:[]
    },
    mutations:{
        addItem(state,value){
            state.lists.push(value);
        }
    },
    actions:{

    }
})
