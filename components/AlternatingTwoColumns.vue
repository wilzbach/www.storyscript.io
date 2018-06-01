<template>
  <div>
    <div v-for="(data, index) in textData" :key="index" class='columns parent'>
      <div class='column is-two-fifths' :style="{
        order: (index + (reversed ? 1 : 0)) % 2,
      }">
        <div :style="{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }">
          <img v-if="data.image" :style="{
            marginBottom: 0,
            width: '100%',
            borderRadius: '6px',
          }" :src="data.image"/>
          <code-block v-if="data.code" :code="data.code"/>
        </div>
      </div>
      <div class='column'>
        <div :style="{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
          padding: '25px',
        }">
          <h2>{{data.title}}</h2>
          <p>{{data.description}}</p>
          <ul v-if="data.items" :style="{
            minWidth: '380px',
            paddingLeft: 0,
            listStyle: 'none'
          }">
            <li v-for="(item, index) in data.items" :key="index" :style="{
              height: '4em',
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #333',
              marginBottom: 0,
              ':last-child': {
                borderBottom: 'none',
              }
            }">
              <div v-html="item.icon" :style="{
                stroke: '#111',
                fill: 'none',
                width: '16px',
                marginRight: '0.7em',
              }"/> {{item.text}}
            </li>
          </ul>
          <button class="primary">
            <a :href="data.link" :style="{
              marginTop: '2em',
              color: '#9756EB',
            }">{{data.linkText}}</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeBlock from '~/components/CodeBlock.vue'

export default {
  components: { CodeBlock },
  props: ['reversed', 'textData'],
};
</script>

<style scoped lang="styl">
.parent
  &:not(:first-child)
    margin-top 65px
  @media (max-width: 768px)
    order 0
</style>
