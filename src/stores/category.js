import { defineStore } from "pinia";


export const useCategoryStore = defineStore('category', () => {
    const categories = [
        'GPU',
         'CPU',
          'motherboard',
           'RAM'
    ];
    
    return{
        categories,
    }
});