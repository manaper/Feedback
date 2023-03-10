import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import { FaQuestion } from 'react-icons/fa'
import AboutIconLink from './components/shared/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {





    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats/>
                            <FeedbackList/>
                        </>
                    }>

                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                </div>
                <AboutIconLink /> 

        </Router>
        </FeedbackProvider>
    )
}


export default App