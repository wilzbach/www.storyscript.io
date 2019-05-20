<template>
  <section class="about">
    <div class="container">
      <believing-template
        v-for="(step, idx) of steps"
        :key="`step-${idx}`"
        :idx="idx"
        :name="step.name"
        :content="step.content"
        :blog="step.blog ? step.blog[0] : undefined"
        :blog-url="step.blog ? step.blog[1] : undefined"
        :picture="step.picture"
      />
    </div>
  </section>
</template>

<script>
import PictureOSS from '@/assets/img/why/oss.png'
import PictureOSS2 from '@/assets/img/why/oss@2x.png'
import PictureOSS3 from '@/assets/img/why/oss@3x.png'
import PictureDev from '@/assets/img/why/dev.png'
import PictureDev2 from '@/assets/img/why/dev@2x.png'
import PictureDev3 from '@/assets/img/why/dev@3x.png'
import PictureStory from '@/assets/img/why/story.png'
import PictureStory2 from '@/assets/img/why/story@2x.png'
import PictureStory3 from '@/assets/img/why/story@3x.png'
import BelievingTemplate from '@/components/BelievingTemplate'

export default {
  name: 'Why',
  components: { BelievingTemplate },
  data: () => ({
    steps: [{
      name: 'open source community',
      content: 'Code is brought to life with cross-application metrics and usage insights to empower developers and vendors with actionable data to improve software.',
      picture: [PictureOSS, PictureOSS2, PictureOSS3]
    }, {
      name: 'developer',
      content: 'Increasing reusability and reducing complexity by extending the developer journey to create powerful applications; focusing on delivering features more effectively at scale.',
      picture: [PictureDev, PictureDev2, PictureDev3]
    }, {
      name: 'story of data',
      content: 'Over the last 50 years we crafted programming languages to communicate with computers. It’s time we amplify this communication with a new language for top-level abstractions that is intuitive and familiar.',
      blog: ['Storytelling your application', '//storyscript.io/blog/story-telling'],
      picture: [PictureStory, PictureStory2, PictureStory3]
    }]
  })
}
</script>
