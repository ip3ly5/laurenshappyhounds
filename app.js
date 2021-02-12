// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
Vue.use(VueMeta)

const Index = {
  metaInfo: () => ({
    title: 'Home',
    titleTemplate: "%s | Lauren's Happy Hounds, Independent Dog Care and Walking Services",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: "width=device-width, initial-scale=1, maximum-scale=1"
      },
      {
        name: 'description',
        content: 'Independent dog walker and pet sitter based in Waterlooville, Fareham, Rowlands castle, Petersfield and surrounding areas. Fully insured, dog first aid trained and DBS checked. Individual dog walking, group dog walks, pet visits, pet sitting / house sitting. Meet and greet is free!'
      }
    ]
  }),
  template:

    `<div class="content">
      <div class="centerContent">
        <div id="laurenImg">
          <img src="../laurenshappyhounds/images/profilepic.gif" alt="Picture of Lauren, a blonde smiley girl crouching next to a small dog.">
          <h1 id="laurenTxt">Hi, I'm Lauren! 🐾</h1>
        </div>
        <div id="infoMapDiv">
          <div id="info">
            <div>
              <p>Relax, knowing your dog is ‘having a ball’ while you complete your busy schedule! Laurens Happy Hounds 
              will ensure your furry friend will be looked after and is in safe hands. 
              Based in Waterlooville, Fareham, Rowlands Castle and Surrounding Areas.</p>
              <p>I attended a Dog Walking training course, where I learnt about breeds, dog behaviour and tips. I’ve also completed a course in Animal Care. 
              I have always had some kind of animal in my house, whether it be Dogs, Cats, or even Guinea Pigs. I grew up in a pet friendly household. </p>

              <p>I am fully insured, DBS checked and Dog First Aid trained.</p>
              <h3 style="text-align:center">Get in <router-link to="/laurenshappyhounds/contact">contact</router-link> to arrange a free meet and greet!</h3>
            </div>
          </div>
      
            <div id="map">
              <div id="mapText">My operating area:<div id="colouredSquare"></div> 
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
`,


  mounted: function () {
    var bounds = [
      [-1.24544, 50.747], // Southwest coordinates
      [-0.889818, 50.9412178] // Northeast coordinates
    ];

    var boundsMax = [
      [-1.7049, 50.3765], // Southwest coordinates
      [-0.4765, 51.0592] // Northeast coordinates
    ]

    mapboxgl.accessToken = 'pk.eyJ1IjoiaXAzbHk1IiwiYSI6ImNrMGM1ZXg2bjB5cXgzYm53bHAyem5ldmkifQ.LM4FfJrdUcagfWYHuDUjww';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.061, 50.848],
      trackResize: true,
      logoPosition: 'bottom-left',
      maxBounds: boundsMax

    })

    router.beforeEach((to, from, next) => {
      map._trackResize = false;
      next();
    })

    router.afterEach((to, from) => {
      if (this.$route.path == '/') {
        map._trackResize = true;
      }
    });



    map.fitBounds(bounds);

    map.on('load', function () {
      map.addLayer({
        'id': 'portsmouth',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': [
                [
                  [-1.1567, 50.7639],
                  [-1.2668, 50.8079],
                  [-1.2222, 50.8799],
                  [-1.1343, 50.9014],
                  [-0.9968, 50.9205],
                  [-0.9303, 50.8727],
                  [-1.0551, 50.7639]
                ]
              ]
            }
          }
        },
        'layout': {},
        'paint': {
          'fill-color': '#088',
          'fill-opacity': 0.3
        }
      });
    })
  }
}
const Pricing = {

  metaInfo: () => ({
    title: 'Pricing',
    titleTemplate: "%s | Lauren's Happy Hounds, Independent Dog Care and Walking Services",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: "width=device-width, initial-scale=1, maximum-scale=1"
      },
      {
        name: 'description',
        content: 'View my affordable prices for Independent dog walking and pet sitting services operating in Waterlooville, Fareham, Rowlands castle, Petersfield and surrounding areas. Individual dog walking, group dog walks, pet visits, pet sitting / house sitting. Meet and greet is free!'
      }
    ]
  }),
  template: `<div class="content">
  <div id="pricingContainer">
  
  <div class="category">
  <h1>Dogs Day Out 🐶</h1>
  
  <h2>Dogs Day Out:</h2><p>Is your dog home alone all day? This service is ideal for dogs that need more exercise and attention, 
  they will accompany me through my day so this means they will have plenty of time to play and socialise!
    </p>
    <div class="pricePair">
    <h3>4 Hours (minimum)</h3>
        <p class="priceAmount">£22</p>
        </div>
        </div>

        
        <div class="category"><h1>Dog Walking 🐕</h1>
        <h2>Individual:</h2> <p>A one 2 one service. 
        Individual walks are great for some play time and company. 
        The walk will last either 30 mins, or 1 hour (from pick up to drop off).
        <div class="price">
        <div class="pricePair">
        <h3>30 Minutes</h3>
        <p class="priceAmount">£8</p>
        </div>
        <div class="pricePair">
        <h3>1 Hour</h3>
        <p class="priceAmount">£12</p>
        </div>
        <div class="pricePair">
        <h3>(1 Hour) 5 Days a week</h3>
        <p class="priceAmount">£55</p>
        </div>
      </div>
      <h2>Group:</h2><p> Group walks are great for dogs who want to play and socialise with other dogs.
      The maximum is 4 dogs at a time, to ensure the best experiences.
      Group walks last 1 hour (from pick up to drop off).</p>
      <div class="price">
      <div class="pricePair">
          <h3>1 Hour</h3>
          <p class="priceAmount">£10</p>
          </div>
          <div class="pricePair">
          <h3>2 Dogs (same house)</h3>
          <p class="priceAmount">£15</p>
          </div>
          <div class="pricePair">
          <h3>(1 Hour) 5 Days a week</h3>
          <p class="priceAmount">£45</p>
          </div>
          </div>
          </div>
          
          <div class="category">
          <h1>Visits 🏘️</h1>
          <h2>Visits:</h2>
          <p> This will include a visit to your home to visit your puppy's/kittens/older 
          Dogs or Cats for that much needed toilet break, feed, water and play!</p>
          <div class="price">
          <div class="pricePair">
          <h3>1 Hour</h3>
          <p class="priceAmount">£10</p>
          </div>
          <div class="pricePair">
          <h3>30 Mins</h3>
          <p class="priceAmount">£7</p>
          </div>
          </div>
          </div>
          </div>
          </div>
          `
}
const Contact = {
  metaInfo: () => ({
    title: 'Contact',
    titleTemplate: "%s | Lauren's Happy Hounds, Independent Dog Care and Walking Services",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: "width=device-width, initial-scale=1, maximum-scale=1"
      },
      {
        name: 'description',
        content: 'Contact Lauren’s Happy Hounds today if you’re looking to find a reliable independent dog walker or pet sitter. Based in Waterlooville, Fareham, Rowlands castle, Petersfield and surrounding areas. Phone number: 07305 645 399 Facebook: www.facebook.com/laurenshappyhounds, Email: laurenshappyhounds@gmail.com.'
      }
    ]
  }),
  data() {
    return {
      sName: '',
      sEmail: '',
      sMessage: '',
      responseMessage: 'Send Message',
      disabled: false,
      showName: false,
      showEmail: false,
      showMessage: false
    }
  },
  methods: {

    sendEmail() {
      const self = this;
      var inputName = this.sName;
      var inputEmail = this.sEmail;
      var inputMessage = this.sMessage;
      var emailButton = document.getElementById('sendMessage');

      self.responseMessage = `<div class="loader"></div>`;

      const data = {
        "name": inputName,
        "email": inputEmail,
        "message": inputMessage
      }

      emailButton.disabled = true;

      var fd = new FormData();

      for (var i in data) {
        fd.append(i, data[i]);
      }

      const url = 'contact.php';

      fetch(url, {
          method: 'POST', // or 'PUT'
          body: fd, // data can be `string` or {object}!
        }).then(res => res.json())
        .then(response => {
          self.success = true;
          self.responseMessage = response.message;
          if (response.status == 1) {
            emailButton.style.backgroundColor = '#6cd46c';
          } else {
            emailButton.style.backgroundColor = 'red';
          }
        })
        .catch(error => console.error('Error:', error));
    },

    removeSuccessMessage() {
      var emailButton = document.getElementById('sendMessage');
      this.responseMessage = 'Send Message';
      emailButton.style.backgroundColor = '#43BBDD';
      emailButton.disabled = false;
    }

  },

  template:

    `<div class="content">
    <div id="contactInfoForm">
        <div id="infoFormText">
          <h1> Get in Contact!</h1>
          <span>
            <p><strong>Lauren's Happy Hounds</strong></p>
            <p>🏠 Waterlooville, Hampshire</p>
            <p>📧 <a href="mailto:Laurenshappyhounds@gmail.com">Laurenshappyhounds@gmail.com</a></p>
            <p>📞 <a href="tel:07305645399">07305645399</a></p>
            <span id="socialIcons">
              <a href='https://www.facebook.com/Laurens-Happy-Hounds-103001844501419/'><img src="images/facebook.png" alt="facebook logo, this links to laurens' facebook page"></a>
              <a href='https://www.instagram.com/laurenshappyhounds/'><img src="images/instagram.png" alt="instagram logo, this links to laurens instagram page"></a>
            </span>
          </span>
        </div>
      <div id="contactContainer">
        <div id="contactForm">
          <h1>Send a message!</h1>
          <form v-on:submit="sendEmail" v-on:submit.prevent="onSubmit">
          <transition name="fade">
            <label class="hidden" v-bind:class="{ active: showName }" for="name">Name:</label>
          </transition>

            <input class="textInput" required minlength="2" maxlength="25" type="string" :disabled="disabled == 1" v-on:focus="showName = !showName" v-on:blur="showName = !showName" v-model="sName" @input="removeSuccessMessage" id="name" placeholder="Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Name'">
            <transition name="fade">
              <label class="hidden" v-bind:class="{ active: showEmail }" for="email">Email:</label>
            </transition>
            <input class="textInput" required minlength="7" maxlength="25" :disabled="disabled == 1" v-on:focus="showEmail = !showEmail" v-on:blur="showEmail = !showEmail" type="email" v-model="sEmail" @input="removeSuccessMessage" id="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'">
            <transition name="fade">
              <label class="hidden" v-bind:class="{ active: showMessage }" for="message">Message:</label>
            </transition>
            <textarea required minlength="10" maxlength="300" type="string" :disabled="disabled == 1" v-on:focus="showMessage = !showMessage" v-on:blur="showMessage = !showMessage" v-model="sMessage" @input="removeSuccessMessage" id="message" rows="4" cols="50" placeholder="Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'">
            </textarea>
            <div id="GdprText"> 
              <input type="checkbox" name="confirmed" required>
              <p>I confirm that I have read and agree to Laurens' Happy Hounds <router-link to="/laurenshappyhounds/privacy"> privacy policy</router-link></p>
            </div>
            <button v-html="responseMessage" id="sendMessage"></button>
          </form>
      </div>
    </div>
  </div>
</div>`
}


const Privacy = {

  template: `
  <div id="privacyContainer">
    <h1>Privacy Policy</h1>
    <h3>Laurens' Happy Hounds</h3>
    <p>Laurens Happy Hounds operates the laurenshappyhounds.co.uk website, which provides the SERVICE.</p>
    
    <p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Laurens Happy Hounds website.
    
    <p>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
    
    <h3>Information Collection and Use</h3>
    <p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, email, and identifiable information you submit in the message field. The information that we collect will be used to contact or identify you.</p>
    
    <h3>Log Data</h3>
    <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
    
    <h3>Cookies</h3>
    <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.
    
    <p>Our website uses these "cookies" to collect information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>
    
    <h3>Service Providers</h3>
    <p>We may employ third-party companies and individuals due to the following reasons:</p>
    <ul>
      <li>To facilitate our Service;</li>
      <li>To provide the Service on our behalf;</li>
      <li>To perform Service-related services;</li>
      <li>To assist us in analyzing how our Service is used.</li>
    </ul>

    <p>We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
    
    <h3>Security</h3>
    <p>We value your trust in providing us with your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
    
    <h3>Links to Other Sites</h3>
    <p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
    
    <h3>Children’s Privacy</h3>
    
    <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
    
    <h3>Changes to This Privacy Policy</h3>
    <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
    
    <h3>Contact Us</h3>
    <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to <router-link to="/laurenshappyhounds/contact">contact us. </router-link></p>
  </div>
  `
}

const routes = [{
    path: '/laurenshappyhounds',
    component: Index
  },
  {
    path: '/laurenshappyhounds/contact',
    component: Contact
  },
  {
    path: '/laurenshappyhounds/pricing',
    component: Pricing
  },
  {
    path: '/laurenshappyhounds/privacy',
    component: Privacy
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`

  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})


// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  data: {
    showModal: false
  },
  router
}).$mount('#app')

// Now the app has started!