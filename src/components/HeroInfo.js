import React from 'react'
import ButtonRow from './ButtonRow'
import HeroHeader from './HeroHeader'
import HeroImage from './HeroImage'
import HeroNumber from './HeroNumber'
import SubHeader from './SubHeader'
import Label from './Label'
import LocationList from './LocationList'
import LineBreak from './LineBreak'
import Footer from './Footer'

const HeroInfo = ({ item, onClick, itemList }) => {
  const evolutionFrom = () => (item.evolution.evolutionTree.filter(ele => (ele.stage === item.evolution.stage - 1))[0])
  const evolutionTo = () => (item.evolution.evolutionTree.filter(ele => (ele.stage === item.evolution.stage + 1))[0])

  return (
    <div className='flex flex-col justify-center items-center my-10'>
        <HeroHeader 
          name={item.name}
        />
        <HeroNumber 
          number={item.number}
          onClick={onClick}
        />
        <HeroImage 
          size='8'
          hero={item.portraitWikiUrl}
        />
        <ButtonRow 
          currentTem={item}
        />
        <SubHeader 
          text='Types & Evolutions'
        />
        <div className='grid gap-3 grid-cols-2 grid-rows-3 mt-4'>
          <div className="flex items-center">
            <Label 
              text='Types'
              gridRow='1'
              gridCol='1'
            />
          </div>
          <div className="flex justify-center items-center">
            <h1 className='font-bold mr-2'>{item.types[0]}</h1>
            <h1 className='font-bold mr-2'>{item.types[1]}</h1>
          </div>
          <div className="flex items-center">
            <Label 
              text='Evolves to'
              gridRow='2'
              gridCol='1'
            />
          </div>
          <div className="flex justify-center items-center">
            <h1 className='font-bold mr-2'>
              {item.evolution.evolves && item.evolution.stage < item.evolution.evolutionTree.length - 1
                ? evolutionTo().name
                : 'Does not evolve'}
            </h1>
            { item.evolution.evolves && item.evolution.stage < item.evolution.evolutionTree.length - 1 && <HeroImage 
              size='3'
              hero={itemList[evolutionTo().number - 1].portraitWikiUrl}
            /> }
          </div>
          <div className="flex items-center">
            <Label 
              text='Evolves from'
              gridRow='3'
              gridCol='1'
            />
          </div>
          <div className="flex justify-center items-center">
            <h1 className='font-bold mr-2'>
              {item.evolution.evolves && item.evolution.stage > 0
                ? evolutionFrom().name
                : 'None'}
            </h1>
            { item.evolution.evolves && item.evolution.stage > 0 && <HeroImage 
              size='3'
              hero={itemList[evolutionFrom().number - 1].portraitWikiUrl}
            /> }
          </div>
        </div>
        <SubHeader 
          text='Physical Specs'
        />
        <div className='grid gap-4 grid-cols-2 grid-rows-2 mt-4'>
          <Label
            text='Height'
            gridRow='1'
            gridCol='1'
          />
          <Label
            text='Weight'
            gridRow='2'
            gridCol='1'
          />
          <div className="flex justify-center items-center">
            <h1 className='font-bold'>
              {item.details.height.cm}cm / {item.details.height.inches}"
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <h1 className='font-bold'>
              {item.details.weight.kg}kg / {item.details.weight.lbs}lbs
            </h1>
          </div>
        </div>
        <SubHeader 
          text='Places to Catch'
        />
        <LocationList
          places={item.locations.map(loc => (loc.location))}
        />
        <LineBreak />
        <Footer />
        
    </div>
  )
}

export default HeroInfo