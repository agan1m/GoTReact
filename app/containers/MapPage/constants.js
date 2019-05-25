export const SET_COORDINATES = 'app/map/SET_COORDINATES';
export const SHOW_ACTIONMENU = 'app/map/SHOW_ACTIONMENU';

export const LANDS_INFO = {
  WINTERFELL: { id: 'winterfell', center: { x: 304.60000610351562, y: 473 } },
  HARHOLD: { id: 'harhold', center: { x: 823, y: 300 } },
  BLACKCASTLE: { id: 'blackcastle', center: { x: 600, y: 150.6000061035156 } },
  STONECOAST: { id: 'stoneCoast', center: { x: 8, y: 722 } },
  WIDOWWATCH: { id: 'widowWatch', center: { x: 850, y: 687 } },
  WHITEPORT: { id: 'whitePort', center: { x: 673, y: 500 } },
  FLINT: { id: 'flint', center: { x: -90, y: 1100 } },
  SULPHIDE: { id: 'sulphide', center: { x: 120, y: 1050 } },
  MOATKATE: { id: 'moatKate', center: { x: 403, y: 970 } },
  TWINS: { id: 'twins', center: { x: 450, y: 1250 } },
  FINGERS: { id: 'fingers', center: { x: 730, y: 1202 } },
  MOONMOUNT: { id: 'moonMount', center: { x: 652, y: 1420.800048828125 } },
  EYRIE: { id: 'eyrie', center: { x: 920, y: 1477 } },
  SEGARD: { id: 'segard', center: { x: 250.3999938964844, y: 1207 } },
  RIVERRAN: {
    id: 'riverran',
    center: { x: 300.29998779296875, y: 1500.300048828125 },
  },
  LANISPORT: { id: 'lanisport', center: { x: 44.69998550415039, y: 1621.5 } },
  STONESEPT: {
    id: 'stoneSept',
    center: { x: 324.49993896484375, y: 1700.099365234375 },
  },
  HARRENHOLL: {
    id: 'harrenholl',
    center: { x: 530.7000122070312, y: 1650.300048828125 },
  },
  CLAW: { id: 'claw', center: { x: 700, y: 1700.300048828125 } },
  ROYALPORT: {
    id: 'royalPort',
    center: { x: 613.2999877929688, y: 2000.60009765625 },
  },
  ROYALWODD: {
    id: 'royalWood',
    center: { x: 726.7000122070312, y: 2118.300048828125 },
  },
  SHTORMLIMIT: {
    id: 'shtormLimit',
    center: { x: 783.5, y: 2321.699951171875 },
  },
  BONEROAD: { id: 'boneRoad', center: { x: 505.5, y: 2300.300048828125 } },
  SEASIDEMARKS: { id: 'seasideMarks', center: { x: 20, y: 1881.699951171875 } },
  BLACKWATER: { id: 'blackWater', center: { x: 386, y: 1871 } },
  OPENSPACE: { id: 'openSpace', center: { x: 363, y: 2108.300048828125 } },
  HIGHTGARDEN: { id: 'hightGarden', center: { x: -24, y: 2181 } },
  OLDTOWN: { id: 'oldTown', center: { x: -100, y: 2453 } },
  DORNMARKS: { id: 'dornsMarks', center: { x: 219, y: 2339 } },
  THREETOWERS: { id: 'threeTowers', center: { x: -39, y: 2601 } },
  PRINCESPASS: { id: 'princesPass', center: { x: 221.3999938964844, y: 2500 } },
  IRONWOOD: { id: 'ironwood', center: { x: 300, y: 2597 } },
  SUNSPEAR: { id: 'sunSpear', center: { x: 830, y: 2650.399658203125 } },
  SUNCOAST: { id: 'sunCoast', center: { x: 551, y: 2705 } },
  STARFALL: { id: 'starFall', center: { x: 268, y: 2700 } },
  PIKE: { id: 'pike', center: { x: -100, y: 1365 } },
  DRAGONSTONE: { id: 'dragonStone', center: { x: 1089, y: 1775 } },
};

export const LANDS_INFO_ARR = [
  {
    id: 'winterfell',
    center: { x: 304.60000610351562, y: 473 },
    actionOffset: { x: 213, y: 300 },
  },
  {
    id: 'harhold',
    center: { x: 823, y: 300 },
    actionOffset: { x: 213, y: 300 },
  },
  {
    id: 'blackcastle',
    center: { x: 600, y: 150.6000061035156 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'stoneCoast',
    center: { x: 8, y: 722 },
    actionOffset: { x: 213, y: 300 },
  },
  {
    id: 'widowWatch',
    center: { x: 850, y: 687 },
    actionOffset: { x: 153, y: 230 },
  },
  {
    id: 'whitePort',
    center: { x: 673, y: 500 },
    actionOffset: { x: 213, y: 300 },
  },
  {
    id: 'flint',
    center: { x: -90, y: 1100 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'sulphide',
    center: { x: 120, y: 1050 },
    actionOffset: { x: 213, y: 150 },
  },
  {
    id: 'moatKate',
    center: { x: 403, y: 970 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'twins',
    center: { x: 450, y: 1250 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'fingers',
    center: { x: 730, y: 1202 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'moonMount',
    center: { x: 652, y: 1420.800048828125 },
    actionOffset: { x: 213, y: 300 },
  },
  {
    id: 'eyrie',
    center: { x: 920, y: 1477 },
    actionOffset: { x: 160, y: 300 },
  },
  {
    id: 'segard',
    center: { x: 250.3999938964844, y: 1207 },
    actionOffset: { x: 213, y: 300 },
  },
  {
    id: 'riverran',
    center: { x: 300.29998779296875, y: 1500.300048828125 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'lanisport',
    center: { x: 44.69998550415039, y: 1621.5 },
    actionOffset: { x: 213, y: 300 },
  },
  {
    id: 'stoneSept',
    center: { x: 324.49993896484375, y: 1700.099365234375 },
    actionOffset: { x: 213, y: 250 },
  },
  {
    id: 'harrenholl',
    center: { x: 530.7000122070312, y: 1650.300048828125 },
    actionOffset: { x: 163, y: 300 },
  },
  {
    id: 'claw',
    center: { x: 700, y: 1700.300048828125 },
    actionOffset: { x: 213, y: 250 },
  },
  {
    id: 'royalPort',
    center: { x: 613.2999877929688, y: 2000.60009765625 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'royalWood',
    center: { x: 726.7000122070312, y: 2118.300048828125 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'shtormLimit',
    center: { x: 783.5, y: 2321.699951171875 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'boneRoad',
    center: { x: 505.5, y: 2300.300048828125 },
    actionOffset: { x: 163, y: 300 },
  },
  {
    id: 'seasideMarks',
    center: { x: 20, y: 1881.699951171875 },
    actionOffset: { x: 213, y: 300 },
  },
  {
    id: 'blackWater',
    center: { x: 386, y: 1871 },
    actionOffset: { x: 213, y: 250 },
  },
  {
    id: 'openSpace',
    center: { x: 363, y: 2108.300048828125 },
    actionOffset: { x: 213, y: 300 },
  },
  {
    id: 'hightGarden',
    center: { x: -24, y: 2181 },
    actionOffset: { x: 213, y: 300 },
  },
  {
    id: 'oldTown',
    center: { x: -100, y: 2453 },
    actionOffset: { x: 163, y: 200 },
  },
  {
    id: 'dornsMarks',
    center: { x: 219, y: 2339 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'threeTowers',
    center: { x: -39, y: 2601 },
    actionOffset: { x: 213, y: 250 },
  },
  {
    id: 'princesPass',
    center: { x: 221.3999938964844, y: 2500 },
    actionOffset: { x: 163, y: 250 },
  },
  {
    id: 'ironwood',
    center: { x: 300, y: 2597 },
    actionOffset: { x: 213, y: 200 },
  },
  {
    id: 'sunSpear',
    center: { x: 830, y: 2650.399658203125 },
    actionOffset: { x: 213, y: 230 },
  },
  {
    id: 'sunCoast',
    center: { x: 551, y: 2705 },
    actionOffset: { x: 213, y: 220 },
  },
  {
    id: 'starFall',
    center: { x: 268, y: 2700 },
    actionOffset: { x: 213, y: 250 },
  },
  {
    id: 'pike',
    center: { x: -100, y: 1365 },
    actionOffset: { x: 213, y: 250 },
  },
  {
    id: 'dragonStone',
    center: { x: 1089, y: 1775 },
    actionOffset: { x: 213, y: 300 },
  },
];

export const KNIGHT_OFFSET = { x: -144, y: 15 };
