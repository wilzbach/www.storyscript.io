<template>
  <section class="section office">
    <div class="container">
      <div class="columns text--left">
        <div class="column is-full">
          <h1>Our Office</h1>
          <h4 class="subtitle light">Our HQ is in Amsterdam, one of Europe's fastest growing tech hubs; a city whose culture offers ideal work-life balance, cultivating a sustainable and energetic habitat.</h4>
          <div class="columns is-mobile">
            <div class="column is-full map-container">
              <gmap-map
                :center="{ lat: 52.3691418, lng: 4.9134753 }"
                :zoom="11"
                :options="options"
                map-type-id="terrain"
                style="width: 100%; height: 100%">
                <gmap-marker
                  key="office"
                  :position="{ lat: 52.3691418, lng: 4.9134753 }" />
              </gmap-map>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Office',
  data: () => ({
    options: {
      disableDefaultUI: true,
      zoomControl: true,
      styles: [{
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [
          { 'color': '#444444' }
        ]
      }, {
        'featureType': 'landscape',
        'elementType': 'all',
        'stylers': [
          { 'color': '#f2f2f2' }
        ]
      }, {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [
          { 'visibility': 'off' }
        ]
      }, {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [
          { 'saturation': -100 },
          { 'lightness': 45 }
        ]
      }, {
        'featureType': 'road.highway',
        'elementType': 'all',
        'stylers': [
          { 'visibility': 'simplified' }
        ]
      }, {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [
          { 'visibility': 'off' }
        ]
      }, {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [
          { 'visibility': 'off' }
        ]
      }, {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [
          { 'color': '#adc0f3' },
          { 'visibility': 'on' }
        ]
      }]
    }
  })
}
</script>

<style lang="scss" scoped>
.office {
  .map-container {
    padding: 1rem 2rem;
    margin: auto;
    text-align: center;
    background-color: #FFF;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.089);
    color: #464769 !important;
    border-radius: .5rem;
    height: 400px;
  }

  h1 {
    color: #000;
  }

  .subtitle {
    color: #464769;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }
}
</style>
