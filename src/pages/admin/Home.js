import React  from 'react'
import { CContainer } from '@coreui/react'

import Header from '../../components/containers/TheHeader';
import Footer from '../../components/containers/TheFooter';

import Table from '../../components/tables/Tables' 

const TheContent = () => {
  return (
    <div className="c-app c-default-layout">
        <div className="c-wrapper">
            <Header/>
            <div className="c-body">
                <main className="c-main">
                    <CContainer fluid>
                        <Table/>
                    </CContainer>
                </main>
            </div>
            <Footer/>
      </div>
    </div>
  )
}

export default React.memo(TheContent)

