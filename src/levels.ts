interface Levels {
  [level: object]: {
  }
};
export const levels:object extends Levels = {
  level1: {
    first:
    `<dish>
  <!--empty-->
</dish>`,
    second:
    `<dish>
  <!--empty-->
</dish>`,
    third: '',
    fourth: '',
    fifth: '',
    amountItems: 2,
    winSelector: 'dish',
    dishNumberWithItem: [],
    typeItem: [],
    dishNumberAnimated: [0, 1],
    typeItemAnimated: [],
  },
  level2: {
    first:
    `<dish class="animated">
  <!--empty-->
</dish>`,
    second:
    `<dish>
  <!--empty-->
</dish>`,
    third:
    `<dish class="animated">
  <!--empty-->
</dish>`,
    fourth: '',
    fifth: '',
    amountItems: 3,
    winSelector: '.animated',
    dishNumberWithItem: [],
    typeItem: [],
    dishNumberAnimated: [0,2],
    typeItemAnimated: [],
  },
  level3: {
    first:
    `<dish>
  <!--empty-->
</dish>`,
    second:
    `<dish class="with-banana">
  <fruits/>
</dish>`,
    third:
    `<dish>
  <!--empty-->
</dish>`,
    fourth: '',
    fifth: '',
    amountItems: 3,
    winSelector: '.with-banana',
    dishNumberWithItem: [1],
    typeItem: ['banana'],
    dishNumberAnimated: [1],
    typeItemAnimated: [],
  },
  level4: {
    first:
    `<dish>
  <fruits class="apple animated"/>
</dish>`,
    second:
    `<dish>
  <fruits class="apple"/>
</dish>`,
    third:
    `<dish>
  <fruits class="cherry"/>
</dish>`,
    fourth: '',
    fifth: '',
    amountItems: 3,
    winSelector: '.apple.animated',
    dishNumberWithItem: [0, 1, 2],
    typeItem: ['apple', 'apple', 'cherry'],
    dishNumberAnimated: [],
    typeItemAnimated: ['apple'],
  },
  level5: {
    first:
    `<dish>
  <fruits class="apple"/>
</dish>`,
    second:
    `<dish>
  <yummy/>
</dish>`,
    third:
    `<dish>
  <fruits class="grapes"/>
</dish>`,
    fourth: '',
    fifth: '',
    amountItems: 3,
    winSelector: 'yummy',
    dishNumberWithItem: [0, 1, 2],
    typeItem: ['apple', 'burger', 'grapes'],
    dishNumberAnimated: [],
    typeItemAnimated: ['burger'],
  },
  level6: {
    first:
    `<dish>
  <fruits/>
</dish>`,
    second:
    `<dish>
  <vegetable class="animated"/>
</dish>`,
    third:
    `<dish>
  <vegetable/>
</dish>`,
    fourth: '',
    fifth: '',
    amountItems: 3,
    winSelector: '.animated',
    dishNumberWithItem: [0, 1, 2],
    typeItem: ['orange', 'onion', 'cabbage'],
    dishNumberAnimated: [],
    typeItemAnimated: ['onion'],
  },
  level7: {
    first:
    `<dish>
  <vegetable/>
</dish>`,
    second:
    `<dish>
  <vegetable id="cabbage"/>
</dish>`,
    third:
    `<dish>
  <vegetable/>
</dish>`,
    fourth: '',
    fifth: '',
    amountItems: 3,
    winSelector: '#cabbage',
    dishNumberWithItem: [0, 1, 2],
    typeItem: ['onion', 'cabbage', 'onion'],
    dishNumberAnimated: [],
    typeItemAnimated: ['cabbage'],
  },
  level8: {
    first:
    `<dish>
  <vegetable class="onion"/>
</dish>`,
    second:
    `<dish>
  <!--empty-->
</dish>`,
    third:
    `<dish>
  <fruits class="pineapple"/>
</dish>`,
    fourth:
    `<dish>
  <yummy class="burger"/>
</dish>`,
    fifth: '',
    amountItems: 4,
    winSelector: 'dish *',
    dishNumberWithItem: [0, 1, 2, 3],
    typeItem: ['onion', 'covid', 'pineapple', 'burger'],
    dishNumberAnimated: [],
    typeItemAnimated: ['onion', 'covid', 'pineapple', 'burger'],
  },
  level9: {
    first:
    `<div>
 <dish>
    <vegetable class="cabbage"/>
 </dish>`,
    second:
    ` <dish>
    <!--empty-->
 </dish>`,
    third:
    ` <dish>
    <fruits class="strawberry"/>
 </dish>`,
    fourth:
    ` <dish>
    <yummy class="lemon"/>
 </dish>`,
    fifth:
    ` <dish>
    <yummy class="burger"/>
 </dish>
<div>`,
    amountItems: 5,
    winSelector: 'dish:nth-child(2)',
    dishNumberWithItem: [0, 1, 2, 3, 4],
    typeItem: ['cabbage', 'covidToo', 'strawberry', 'lemon', 'burger'],
    dishNumberAnimated: [1],
    typeItemAnimated: [],
  },
  level10: {
    first:
    `<div>
 <dish>
    <!--empty-->
 </dish>`,
    second:
    ` <dish>
    <fruits class="grapes"/>
 </dish>`,
    third:
    ` <dish>
    <fruits class="lemon"/>
 </dish>`,
    fourth:
    ` <dish>
    <fruits class="cherry"/>
 </dish>`,
    fifth:
    ` <dish>
    <!--empty-->
 </dish>
<div>`,
    amountItems: 5,
    winSelector: 'dish:empty',
    dishNumberWithItem: [1, 2, 3],
    typeItem: ['grapes', 'lemon', 'cherry'],
    dishNumberAnimated: [0, 4],
    typeItemAnimated: [],
  }
}
