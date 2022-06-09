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

const HeroInfo = () => {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
        <HeroHeader 
          name='Temtem Name'
        />
        <HeroNumber 
          number='001'
        />
        <HeroImage 
          size='8'
        />
        <ButtonRow />
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
            <h1 className='font-bold mr-2'>Water</h1>
            <h1 className='font-bold mr-2'>Toxic</h1>
          </div>
          <div className="flex items-center">
            <Label 
              text='Evolves to'
              gridRow='2'
              gridCol='1'
            />
          </div>
          <div className="flex justify-center items-center">
            <h1 className='font-bold mr-2'>Platox</h1>
            <HeroImage 
              size='3'
            />
          </div>
          <div className="flex items-center">
            <Label 
              text='Evolves from'
              gridRow='3'
              gridCol='1'
            />
          </div>
          <div className="flex justify-center items-center">
            <h1 className='font-bold mr-2'>Platox</h1>
            <HeroImage 
              size='3'
            />
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
            <h1 className='font-bold'>85cm / 33.46"</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1 className='font-bold'>48kg / 105.84lbs</h1>
          </div>
        </div>
        <SubHeader 
          text='Places to Catch'
        />
        <LocationList
          places={['Gifted Bridges', 'Test']}
        />
        <LineBreak />
        <Footer />
        
    </div>
  )
}

export default HeroInfo