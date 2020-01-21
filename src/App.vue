<template>
  <div
    id="ecars"
    :class="[{'collapsed' : collapsed}]"
  >
    <div class="ecarsmain">
      <div class="container">
        <h1>
          Electric cars shop
          <a
            style="color: #000;text-transform: uppercase;font-size: 14px;font-weight: 400;"
            href="https://github.com/ok9v/ecars"
          >
            Github
          </a>
        </h1>
        <div>
          Select theme:
          <select v-model="selectedTheme">
            <option
              v-for="(theme, index) in themes"
              :key="index"
              :value="theme.input"
            >
              {{ theme.name }}
            </option>
          </select>
        </div>
        <hr style="margin: 50px 0px;border: 1px solid #e3e3e3;">
        <router-view/>
      </div>
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :disableHover="disableHover"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
    </div>
  </div>
</template>

<script>
  const separator = {
    template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
  }

  export default {
    name: 'App',
    data () {
      return {
        menu: [
          {
            header: true,
            title: 'Main menu',
            hiddenOnCollapse: true
          },
          {
            href: '/catalog',
            title: 'Cars catalog',
            icon: 'fa fa-car',
            child: [
              {
                href: '/catalog/sub-page-1',
                title: 'Cars in photos',
                icon: 'fa fa-file-image-o'
              },
              {
                href: '/catalog/sub-page-2',
                title: 'List of cars',
                icon: 'fa fa-list'
              }
            ]
          },
          {
            href: '/ecarsinfo',
            title: 'About electric cars',
            icon: 'fa fa-info-circle',
            child: [
              {
                href: '/ecarsinfo/sub-page-1',
                title: 'Battery degradation chart',
                icon: 'fa fa-line-chart'
              },
              {
                href: '/ecarsinfo/sub-page-2',
                title: 'Sold cars diagram',
                icon: 'fa fa-pie-chart'
              }
            ]
          },
          {
            href: '/disabled',
            title: 'Disabled page',
            icon: 'fa fa-lock',
            disabled: true
          },
          {
            title: 'Badge',
            icon: 'fa fa-cog',
            badge: {
              text: 'new',
              class: 'vsm--badge_default'
            }
          }
        ],
        collapsed: false,
        disableHover: true,
        themes: [
          {
            name: 'Default theme',
            input: ''
          },
          {
            name: 'White theme',
            input: 'white-theme'
          }
        ],
        selectedTheme: ''
      }
    },
    methods: {
      onToggleCollapse (collapsed) {
        console.log(collapsed)
        this.collapsed = collapsed
      },
      onItemClick (event, item) {
        console.log('onItemClick')
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

  body,
  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    background-color: white;
    color: #262626;
  }

  #ecars {
    padding-left: 350px;
  }

  #ecars.collapsed {
    padding-left: 50px;
  }

  .ecarsmain {
    padding: 10px;
  }

  .container {
    min-width: 900px;
    height: 600px;
  }

  pre {
    font-family: Consolas, monospace;
    color: #000;
    background: #fff;
    border-radius: 2px;
    padding: 15px;
    line-height: 1.5;
    overflow: auto;
  }
</style>
