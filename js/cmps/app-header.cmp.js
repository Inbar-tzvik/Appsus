export default {
  template: `
        <header class="app-header">
            <div class="logo">
                <h3>Appsus</h3>
            </div>
            <nav class="nav-bar">
                <router-link to="/">Home</router-link> |
                <router-link to="/mail">Mail</router-link> |
                <router-link to="/note">Notes</router-link>
                <router-link to="/book">Book</router-link>

            </nav>
        </header>
    
    `,
};
