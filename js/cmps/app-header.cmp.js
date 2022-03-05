export default {
  template: `
        <header class="app-header">
            <div class="logo">
              <i class="fa-brands fa-redhat"></i>                
              <router-link  to="/"> <h3>Appsus</h3></router-link>
            </div>
            <nav class="main-header">
                <button @click="isActive = !isActive" class="apps-btn"><i class="fa-solid fa-grip"></i></button>
                <div v-if="isActive" class="apps-modal">
                    <router-link @click="isActive = !isActive" to="/"><i class="fa-solid fa-house"></i></router-link>
                    <router-link @click="isActive = !isActive" to="/email"><img class="gmail-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt=""></router-link>
                    <router-link @click="isActive = !isActive" to="/note"><img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt=""></router-link>
                    <router-link @click="isActive = !isActive" to="/book"><i class="fa-solid fa-book"></i></router-link>
                </div>
            </nav>
        </header>
    
    `,
  data() {
    return {
      isActive: false,
    };
  },
};
