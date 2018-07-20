<template>
  <div>
    <hero :title="title" :subtitle="subtitle">
      <page-background
        :leftImage="headerLeft"
        :rightImage="headerRight"
        :scale="3"
        :scaleRight="3.3"
        :leftX="-490"
        :leftY="0"
        :rightX="-440"
        :rightY="-65"
      />
    </hero>

    <max-width class="body-story">
      <section :style="{
        maxWidth: '780px',
        padding: '50px 0 65px 0',
        marginLeft: 'auto',
        marginRight: 'auto',
      }">
        <div class='has-text-centered'><h2>Our Story</h2></div>
        <p :style="{
          textAlign: 'justified'
        }">
          {{text}}
        </p>
      </section>
    </max-width>

    <max-width class="body" :style="{
      paddingBottom: '68px',
    }">
      <!--
      <section :style="{

      }">
        <div class='has-text-centered'>
          <h2>Team</h2>
        </div>
        <div class="columns" :style="{
          marginTop: '40px',
        }">
          <div v-for="(member, key) in teamMembers" :key="key" class="column">
            <TeamMember :name="member.name" :role="member.role" :twitter-handle="member.twitter" :image="member.image"/>
          </div>
        </div>
      </section>
      -->

      <section :style="{
        paddingTop: '50px',
      }">
        <div class='has-text-centered'>
          <h2>Office</h2>
        </div>
        <p :style="{
          maxWidth: '700px',
          margin: '0 auto 25px auto',
        }">
          {{office.description}}
        </p>
        <div class='level address-container' :style="{
          maxWidth: '425px',
          margin: '0 auto',
        }">
          <div class='level-left'>
            <p>
              <span v-for="(line, key) in office.address" :key="key">{{line}}<br/></span>
            </p>
          </div>
          <div class='level-right'>
            <url-link class="link-text" :to="`https://www.google.com/maps/search/?api&${mapsQuery}`">
              Get directions
            </url-link>
          </div>
        </div>
      </section>
    </max-width>

    <max-width :style="{
      height: '425px',
    }">
      <div :style="{
        width: '100vw',
        marginLeft: '-25px',
        height: '100%',
      }" ref="map"></div>
    </max-width>
  </div>
</template>

<script>
import TeamMember from '~/components/TeamMember'

import steve from '~/assets/images/Steve.jpg'
import jerrod from '~/assets/images/Jerrod.jpg'
import whitney from '~/assets/images/Whitney.jpg'
import headerLeft from '~/assets/images/about-left.svg?external'
import headerRight from '~/assets/images/about-right.svg?external'

export default {
  components: {
    TeamMember,
  },
  data() {
    return {
      headerLeft: headerLeft,
      headerRight: headerRight,
      title: 'About Us',
      subtitle: 'Shaping the power of microservices to make it truly approachable for individual developers or teams of any size.',
      text: 'Our mission is to shape the power of microservices using Storyscript, a high-level programming language that can be used to choreograph microservices, making it truly approachable for individual developers or teams of any size. Developers are now able to focus on core application logic, eliminating the complexity involved in producing an application. The FOSS (Free and Open Source) Asyncy Platform manages the cloud infrastructure without reducing applications’ flexibility, paving the way for swift application development, where developers write the logic in Storyscript, which choreographs services written in any language or library.',
      teamMembers: [
      ],
      office: {
        title: 'Office',
        description: `Our HQ is in Amsterdam, one of Europe's fastest growing tech hubs; a city whose culture offers ideal work-life balance, cultivating a sustainable and energetic habitat.`,
        address: ['Hackers & Founders Building', 'Herengracht 504', '1017 CB Amsterdam'],
      },
    };
  },
  computed: {
    mapsQuery() {
      return `q=${encodeURIComponent(this.office.address.join(',').replace(/ /g, '+'))}`;
    },
  },
  mounted() {
    const mapEl = this.$refs.map;

    if (!this.$google) return;

    const map = new this.$google.maps.Map(mapEl, {
      center: {
        lng: 4.8935913,
        lat: 52.3688436,
      },
      zoom: 14,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ],
    });

    new this.$google.maps.Marker({
      position: {
        lng: 4.8935913,
        lat: 52.3648436,
      },
      map: map,
    });
  }
}
</script>

<style scoped lang="styl">
.body-story
  background #7A33D7
  color white

.body
  background white

.address-container
  @media(max-width: 768px)
    text-align center

.link-text
  font-weight 500
  &:hover
    filter brightness(65%)

</style>
