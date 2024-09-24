import { TipTapEditor } from '@/components/TipTapEditor'
import React from 'react'
import Container from '../_components/container'

const TryEditorPage = () => {
  return (
    <div className='bg-white h-screen w-screen text-black'>
        <Container>
            <h1>Try Editor</h1>
            <TipTapEditor />
        </Container>
    </div>
  )
}

export default TryEditorPage