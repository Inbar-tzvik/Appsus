export default {
  props: ['txt'],
  template: `
  
   <span class="read-more"> {{displayTxt}} <span class="" v-if="isReadMore" @click="showLongText">{{show}}</span></span>
   
   
`,
  data() {
    return {
      isLongMode: false,
    };
  },
  computed: {
    displayTxt() {
      if (!this.isLongMode && this.txt.length > 30) {
        return this.txt.slice(0, 32);
      } else {
        return this.txt;
      }
    },
    isReadMore() {
      return this.txt.length > 30 ? true : false;
    },
    show() {
      return !this.isLongMode ? '...' : '';
    },
  },
  methods: {
    showLongText() {
      this.isLongMode = !this.isLongMode;
    },
  },
};

/* <section class="book-preview">
<img :src="bookImgUrl">

    <p>Name: {{book.title}}</p>
    <p >Price: <span v-html="currencyIcon"> </span>{{book.listPrice.amount}}</p>
</section> */
