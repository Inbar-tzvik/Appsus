export default {
  props: ['txt'],
  template: `
  
   <td class="read-more"> {{displayTxt}} <span class="" v-if="isReadMore" @click="showLongText">{{show}}</span></td>
   
   
`,
  data() {
    return {
      isLongMode: false,
    };
  },
  computed: {
    displayTxt() {
      if (!this.isLongMode && this.txt.length > 40) {
        return this.txt.slice(0, 35);
      } else {
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
