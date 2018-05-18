<template>
  <div class="level" :style="{
    display: 'block',
    color: textColor,
    fontSize: '0.95em',
    margin: '0.8em 0',
  }">
    <div class="level-left">
      <div class="level-item" :style="{
        marginRight: '1em',
      }">
        <div v-html="calendar" :style="{width: '16px', height: '16px', stroke: iconColor, fill: 'none', marginBottom: 0, marginRight: '0.7em'}"/>
        <div>{{date}}</div>
      </div>
      <div class="level-item">
        <div v-html="pin" :style="{width: '16px', stroke: iconColor, fill: 'none', marginBottom: 0, marginRight: '0.7em'}"/>
        <div>{{location}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import calendar from '../assets/images/icon_calendar.svg'
import pin from '../assets/images/icon_pin.svg'

export default {
  props: ['textColor', 'iconColor', 'date', 'location'],
  data() {
    return {
      calendar,
      pin,
    };
  },
};
</script>
