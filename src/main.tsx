import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import ContentGetStarted from './components/ContentGetStarted'
import './index.css'
import InputLink from './components/InputLink'
import AdvancedText from './components/AdvancedText'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <ContentGetStarted/>
    <InputLink/>
    <AdvancedText/>
    <Footer/>
  </React.StrictMode>,
)
