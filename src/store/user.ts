import {createPinia,defineStore} from "pinia";
export const useUserStore = defineStore('user',{
    state: () => {
        return {
            name: 'Pinia',
            age:23,
            counter:0
        }
    },
     // 也可以定义为
    // state: () => ({ count: 0 })
    actions: {
        updateName(name:string) {
            this.name = name
        },
        randomizeCounter(){
            this.counter = Math.round(100 * Math.random())
        }
    },
    getters:{
        getNameAndAge():string{
            return this.name + "：" + this.age;
        }
    }
})

