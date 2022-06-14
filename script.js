const Header = {
  data() {
    return {
      Bonjour: "Je dis Bonjour",
    };
  },

  template: `
  <div>
      <div>
        <h1>NETPRIME+</h1>
        <p>La plateforme video complètement originale</p>
      </div>
  </div>
  `,
};

const OffresContent = {
  data() {
    return {
      ecran: null,
    };
  },

  computed: {
    plurielEcrans() {
      if (this.screenNumber > 1) {
        return "ECRANS";
      }

      return "ECRAN";
    },
  },

  props: {
    title: String,
    screenType: String,
    screenNumber: Number,
    qualityType: String,
    price: Number,
  },

  template: `
  <div>
        <h3>{{title}}</h3>
        <p>{{screenNumber}} {{plurielEcrans}} VIDEO {{qualityType}}</p>
        <p>{{price}} €/MOIS</p>
        <button>S'ABONNER</button>
  </div>
  `,
};

const MainContent = {
  template: `
    <div>
      <h2> NOS FORMULES D'ABONEMENT</h2>
      <p>Toutes nos formules d'abonement son 100% sans</p>
      <p>engagement et résiliables à tout moment. Paiement par </p>
      <p>CB, Paypal et en Bitcoin possible </p>
     </div>
     
  `,
};

const Footer = {
  template: `
  <div>
  <h1>NETPRIME+</h1>
  <p> &copy; Tous droits réservés </p>
  </div>
  `,
};

const App = {
  components: {
    Header: Header,
    MainContent: MainContent,
    Footer: Footer,
    OffresContent: OffresContent,
  },

  template: `
  <div>
  <Header></Header>
  <MainContent></MainContent>
  <div class="offres">
      <OffresContent title="SOLO" :screenNumber="1" qualityType="HD" :price="9.99"></OffresContent>
      <OffresContent title="FAMILLY" :screenNumber="3"  qualityType="HD" :price="12.99"></OffresContent>
      <OffresContent title="FAMILLY 4K" :screenNumber="4"  qualityType="4K" :price="15.99"></OffresContent>
     </div>
  <Footer></Footer>
  
  </div>
  `,
};
Vue.createApp(App).mount("#root");
