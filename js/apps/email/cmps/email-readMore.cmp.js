export default {
  props: ['txt'],
  template: `
  <section>
   <p class="read-more"> {{displayTxt}}</p>
   <span class="" v-if="isReadMore" @click="showLongText">{{show}}</span>
   </section>
`,
  data() {
    return {
      isLongMode: false,
    };
  },
  computed: {
    displayTxt() {
      if (!this.isLongMode && this.txt.length > 100) {
        console.log('big txt');
        return this.txt.slice(0, 40);
      } else {
        console.log('short txt');
        return this.txt;
      }
    },
    isReadMore() {
      return this.txt.length > 100 ? true : false;
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
