import Parallax from './components/parallax';
import Card from './components/card'
import Footer from "./components/footer"

export default function Home() {
  return (
    <div>
      <Parallax></Parallax>
      <Card title={"History of the compass"} text={"The first compasses in ancient Han dynasty China were made of lodestone, a naturally magnetized ore of iron. Later compasses were made of iron needles, magnetized by striking them with a lodestone, which appeared in China by 1088 during the Song dynasty, as described by Shen Kuo. Dry compasses began to appear around 1300 in Medieval Europe and the Islamic world. This was supplanted in the early 20th century by the liquid-filled magnetic compass."} isLeft={true} btnUrl={"https://en.wikipedia.org/wiki/Compass#History"} imgUrl={"/1.jpg"}></Card>
      <Card title={"The importance of the compass"} text={"In a world where technology often dictates our every move, the humble compass remains a reliable and essential tool for finding our way. Its role in providing a sense of direction and orientation is unparalleled, whether we're navigating the wilderness or exploring new cities. The compass serves as a reminder of our connection to the natural world and the importance of staying grounded in our surroundings. Without the compass, we would be lost - both figuratively and literally."} btnUrl={"https://en.wikipedia.org/wiki/Compass#Use"} imgUrl={"/2.jpg"}></Card>
      <Card title={"How a compass is made"} text={"Behind the simplicity of a compass lies a complex process of manufacturing and precision engineering. From the magnetic needle to the housing and dial, every component is carefully crafted to ensure accuracy and durability. Skilled artisans and craftsmen work tirelessly to assemble each compass with meticulous attention to detail, using a combination of traditional techniques and modern technology. The result is a reliable and functional tool that will guide us on our journeys for years to come."} isLeft={true} btnUrl={"https://en.wikipedia.org/wiki/Compass#Construction"} imgUrl={"/3.jpg"}></Card>
      <Card title={"The modern day compass"} text={"In today's digital age, the traditional compass faces stiff competition from GPS devices and smartphone apps. However, its timeless appeal and reliability remain unmatched, making it a popular choice for outdoor enthusiasts and adventurers. In recent years, advancements in technology have allowed for the development of digital compasses that combine the best of both worlds - the accuracy of a traditional compass with the convenience of modern technology. As we continue to innovate and adapt to new challenges, the compass will always have a place in our hearts as a symbol of direction and exploration."} btnUrl={"https://issuu.com/orienteeringaustralia/docs/auso-2004-4/s/13338317"} imgUrl={"/4.jpg"}></Card>
      <Footer></Footer>
    </div >
  )
}
