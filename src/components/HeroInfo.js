import React from 'react'
import ButtonRow from './ButtonRow'
import HeroHeader from './HeroHeader'
import HeroImage from './HeroImage'
import HeroNumber from './HeroNumber'
import SubHeader from './SubHeader'
import Label from './Label'
import LineBreak from './LineBreak'
import HeroAnimated from './HeroAnimated'
import { useState } from 'react'
import LeftControl from './LeftControl'
import RightControl from './RightControl'

const HeroInfo = ({ item, onClick, itemList, handleLuma, luma }) => {
  const evolutionFrom = () => (item.evolution.evolutionTree.filter(ele => (ele.stage === item.evolution.stage - 1))[0])
  const evolutionTo = () => (item.evolution.evolutionTree.filter(ele => (ele.stage === item.evolution.stage + 1))[0])
  const heroAnimatedRender = `https://temtem-api.mael.tech${item.renderAnimatedImage}`
  const heroLumaAnimatedRender = `https://temtem-api.mael.tech${item.renderAnimatedLumaImage}`

  const [error, setError] = useState(false);

  return (
    <div className='flex justify-center items-center gap-20 mt-20'>
      <LeftControl
        onClick={onClick}
        setError={setError}
        number={item.number}
      />

      <div className='flex flex-col justify-center items-center border-4 rounded-lg p-4 border-fuchsia-900 -skew-y-6 shadow-[-15px_15px_20px_rgba(0,0,0,0.15)] shadow-gray-700 row-span-1 col-start-2 col-end-3'>
          <HeroHeader 
            name={item.name}
          />
          <HeroNumber 
            number={item.number}
          />
          <HeroImage 
            size='8'
            hero={!luma ? item.portraitWikiUrl : item.lumaWikiPortraitUrlLarge}
          />
          <ButtonRow 
            currentTem={item}
            handleLuma={handleLuma}
            luma={luma}
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
          <LineBreak />
           
      </div>
      {item.wikiRenderAnimatedUrl ? 
      <HeroAnimated 
        error={error}
        setError={setError}
        image={!luma ? heroAnimatedRender : heroLumaAnimatedRender}
      /> : <h1 className='font-bold text-2xl'>No Animated Render Found</h1>}

      <RightControl
        onClick={onClick}
        setError={setError}
        number={item.number}
      />
    </div>
  )
}

export default HeroInfo