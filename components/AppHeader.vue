<template>
  <div
    :style="{
      marginTop: '40px',
      marginBottom: '25px',
    }"
  >
    <div
      class='columns'
      :style="{
        margin: '0 auto',
        maxWidth: '1200px',
        padding: '0 25px',
      }"
    >
      <div class='column' :style="{
        padding: 0,
      }">
        <div class='columns is-mobile'>
          <div class='column'>
            <nuxt-link to='/'>
              <app-logo :style="{
                margin: 0,
              }"/>
            </nuxt-link>
          </div>
          <div v-if="!mobileMenuOpen" class='column is-narrow is-hidden-tablet'>
            <div :style="{
              fontSize: '32px',
              lineHeight: '20px',
              verticalAlign: 'top',
            }">
              <a class='mobile-menu-icons' @click="openMenu">☰</a>
            </div>
          </div>
        </div>
      </div>

      <div class="is-hidden-tablet" v-if="mobileMenuOpen" :style="{
        position: 'fixed',
        background: 'black',
        textAlign: 'right',
        width: '100vw',
        height: '100vh',
        left: 0,
        top: 0,
        padding: '23px',
        zIndex: '3000',
      }">
        <div :style="{
          width: '100%',
          textAlign: 'right',
          fontSize: '2em',
          paddingBottom: '25px',
        }">
          <a class='mobile-menu-icons' @click="closeMenu">✕</a>
        </div>
        <nav>
          <ul class='columns' :style="{
            textAlign: 'center',
            fontSize: '1.2em',
            paddingLeft: '0',
          }">
            <div v-for="(link, key) in mobileHeaderLinks" :key="key">
              <li v-if="!link.items" class='column' :style="{
                padding: '22px',
              }">
                <span @click="closeMenu">
                  <header-link :to="link.to">{{link.text}}</header-link>
                </span>
              </li>
              <li v-else v-for="(item, key) in link.items" :key="key" class='column' :style="{
                padding: '22px',
              }">
                <span @click="closeMenu">
                  <header-link :to="item.to">{{item.text}}</header-link>
                </span>
              </li>
            </div>
          </ul>
        </nav>
      </div>

      <div class='column is-hidden-mobile is-narrow' :style="{
        padding: 0,
      }">
        <nav>
          <ul :style="{
            textAlign: 'center',
            fontSize: '1.06em',
            margin: 0,
          }">
            <li v-for="(link, key) in headerLinks" class='web-header-link' :key="key">
              <header-link v-if="!link.items" :to="link.to">{{link.text}}</header-link>
              <div v-else class="dropdown is-hoverable is-right">
                <div class="dropdown-trigger">
                  <a :style="{
                    color: 'white',
                    fontWeight: '400',
                    fontSize: '0.9em',
                  }"><span v-html="link.text"/></a>
                </div>
                <div class="dropdown-menu" :style="{ minWidth: '130px' }" role="menu">
                  <div class="dropdown-content" :style="{
                    textAlign: 'left',
                  }">
                    <url-link class="dropdown-item" v-for="(item, key) in link.items" :key="key" :to="item.to" :style="{
                      fontWeight: '400',
                      fontSize: '0.9em',
                      paddingRight: 0,
                    }">
                      {{item.text}}
                    </url-link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo';
import HeaderLink from '~/components/HeaderLink';

const headerLinks = [
  { text: 'Platform', to: '/platform' },
  { text: 'Documentation', to: 'https://docs.asyncy.com'},
  {
    text: 'More &#x25BE;',
    items: [
      { text: 'About', to: '/about' },
      { text: 'Events', to: '/events' },
      { text: 'Contact', to: '/contact' },
    ],
  },

]

const mobileHeaderLinks = headerLinks.slice()
mobileHeaderLinks.unshift({ text: 'Home', to: '/'})

export default {
  components: {
    AppLogo,
    HeaderLink,
  },
  data() {
    return {
      mobileMenuOpen: false,
      headerLinks: headerLinks,
      mobileHeaderLinks: mobileHeaderLinks,
    };
  },
  methods: {
    openMenu() {
      this.mobileMenuOpen = true;
    },
    closeMenu() {
      this.mobileMenuOpen = false;
    },
  }
}
</script>

<style scoped lang="styl">
.mobile-menu-icons
  color white

.web-header-link
  display inline-block
  margin-left 90px
</style>
