<template>
  <div class="tabs">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="ОПИС">Комплекс EPA + DHA кислот і натуральних
        вітамінів А & D3 для здоров'я твоєї шкіри, волосся, зору, сну, міцних кісток, суглобів та імунітету.
      </a-tab-pane>
      <a-tab-pane key="2" tab="КОРИСТЬ" force-render>
        <ul>
          <li>Покращують стан шкіри: борються з акне та сприяють її регенерації</li>
          <li>Зменшують випадіння волосся, стимулюють його ріст</li>
          <li>Підіймають настрій та полегшують симптоми депресії</li>
          <li>Зміцнюють імунітет: зменшують запальні процеси</li>
          <li>Поліпшують роботу гормонів, серця і ЦНС</li>
          <li>Зменшують болі в суглобах</li>
          <li>Покращують метаболізм і роботу ШКТ</li>
        </ul>
      </a-tab-pane>
      <a-tab-pane key="3" tab="ІНГРЕДІЄНТИ">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Склад:</th>
            <td scope="col">100% риб'ячий жир з печінки тріски, желатин, гліцерин.</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">EPA / DHA</th>
            <td>170 мг / 205 мг</td>
          </tr>
          <tr>
            <th scope="row">Вітамін-А</th>
            <td>656 мкг 2187 МО</td>
          </tr>
          <tr>
            <th scope="row">Вітамін-D3</th>
            <td colspan="2">5.2 мкг 210 МО</td>
          </tr>
          </tbody>
        </table>
      </a-tab-pane>
      <a-tab-pane key="4" tab="СПОСІБ ЗАСТОСУВАННЯ">
        <p>Для профілактики, дорослим і дітям від 11 років – 4 капсули на день, разом із
          їжею або одразу після. Бажано з іншими жирами для кращого засвоєння.
        </p>
        <p>Курс прийому: 2-3 місяці, після чого зробити перерву 1-2 місяці
          або перейти на Омега-3 із Тунця.
        </p>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Tabs',

  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});

</script>

<style lang="scss">
  .tabs {
    max-width: 634px;
    margin-bottom: 56px;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: #00284F;
  }
  .ant-tabs-ink-bar {
    background-color: #00284F;
  }

</style>
