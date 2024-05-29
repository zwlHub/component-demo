<template>
    <div class="listbox">
        <div class="item" v-for="(item, index) in list" :id="index + ''">
            <div>{{ item.title }}</div>
            <div>{{ item.img }}</div>
        </div>
        <div>
            你好
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
const list = [
    {
        img: '图片图片图片图片图片图片1',
        title: '标题标题标题标题标题1'
    },
    {
        img: '图片图片图片图片图片图片2',
        title: '标题标题标题标题标题2'
    },
    {
        img: '图片图片图片图片图片图片3',
        title: '标题标题标题标题标题3'
    },
    {
        img: '图片图片图片图片图片图片4',
        title: '标题标题标题标题标题4'
    },
    {
        img: '图片图片图片图片图片图片5',
        title: '标题标题标题标题标题5'
    }
]
const newData1: number[] = [];
const newData2: number[] = [];
onMounted(() => {
    list.forEach((element, i) => {
        if (i % 2 == 0) {
            newData1.push(i)
        } else {
            newData2.push(i)
        }
    });
    setClassName(newData1,true)
    setClassName(newData2,false)
    function setClassName(data: number[], order: boolean) {
        let x: string, y: string
        if (order) {
            x = "list1"
            y = "list2"
        } else {
            x = "list2"
            y = "list1"
        }
        data.forEach((element, i) => {
            if (i % 2 == 0) {
                document.getElementById(data[i] + '')!.className = x
            } else {
                document.getElementById(data[i] + '')!.className = y
            }
        });
    }
    // for (let i = 0; i < list.length; i++) {
    //     if (i % 2 == 0) {
    //         newData1.push(i)
    //     } else {
    //         newData2.push(i)
    //     }
    // }
    // for (let i = 0; i < newData1.length; i++) {
    //     if (i % 2 == 0) {
    //         document.getElementById(newData1[i] + '')!.className = 'list1'
    //     } else {
    //         document.getElementById(newData1[i] + '')!.className = 'list2'
    //     }
    // }
    // for (let i = 0; i < newData2.length; i++) {
    //     if (i % 2 == 0) {
    //         document.getElementById(newData2[i] + '')!.className = 'list2'
    //     } else {
    //         document.getElementById(newData2[i] + '')!.className = 'list1'
    //     }
    // }
})
</script>
<style>
.listbox {
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    background: #FFF;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .2);
    border-radius: 5px;
    padding: 3px;
}

.list1 {
    display: flex;
    width: 250px;
    margin: 5px;
    background-color: #bfa;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .3);
    flex-direction: column;
    align-items: center;
}

.list2 {
    display: flex;
    width: 250px;
    margin: 5px;
    background-color: #baf;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .3);
    flex-direction: column-reverse;
    align-items: center;
}
/* 方式二：通过nth选择器选中规律元素*/
/*.item:nth-of-type(4n-3),.item:nth-of-type(4n) {*/
/*  background-color: #bfa;*/
/*}*/
/*.item:nth-of-type(4n-1),.item:nth-of-type(4n-2) {*/
/*  background-color: #baf;*/
/*}*/
</style>
