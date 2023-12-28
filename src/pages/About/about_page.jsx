import TimeLine from './components/time_line';
const times = [
  {
    year: 2012,
    description: '與美國合作銅薄膜真空蝕刻Sputter製程',
  },
  {
    year: 2013,
    description:
      '與烏克蘭合作在中國現地化自製藍寶石長晶爐銷售及相關藍寶石材料銷售',
  },
  {
    year: 2014,
    description: '成立大陸辦事處,開發測試治具及探針應用',
  },
  {
    year: 2015,
    description: '成功開發銷售UV固化燈及高亮度檢查燈等零件維修服務',
  },
  {
    year: 2017,
    description:
      'ITO靶材燒結爐 with 日<br />本 ；3D貼合治具改善0.1mmt玻璃吸附問題',
  },
  {
    year: 2018,
    description: '開發切割精度檢查機及超高亮度面光源、MicroLed貼合治具',
  },
];

const About = () => {
  return (
    <div>
      About
      <TimeLine data={times} />
    </div>
  );
};

export default About;
