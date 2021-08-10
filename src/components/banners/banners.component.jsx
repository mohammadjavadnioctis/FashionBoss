import React from 'react'
import './banners.styles.scss'

import Banner from '../banners/banner.component'


const Banners = ()=>{
    
    let imageUrl = 'https://cdn.dsmcdn.com/ty156/campaign/banners/original/576996/d138415e6d_1_new.jpg'
    
    return(
    <div className="banners">
        <div className="bannersMain">
                
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty156/campaign/banners/original/576996/d138415e6d_1_new.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty156/pimWidgetApi/webBig_20210810092917_webBig20210802112253webBig20210622124411webBig20210611084652webBig20210602084448webBig20210429101731webBig20210421093228123456SaatAksesuarWeb20210421102211.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty157/campaign/banners/original/577552/8db7c683f6_1_new.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty157/campaign/banners/original/576997/4d05d15395_1_new.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty158/campaign/banners/original/577563/b24125b2c9_0_new.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty155/pimWidgetApi/webBig_20210806082900_Quzubg140721web1.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty158/pimWidgetApi/webBig_20210809144018_elbisetrendiweb.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty153/pimWidgetApi/webBig_20210804064733_party020321new1.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty149/campaign/banners/original/544139/a2733427bd_1_new.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty157/pimWidgetApi/webBig_20210809142155_alacati090821web1.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty157/pimWidgetApi/webBig_20210810083249_webBig202108031214101823158ErkekWeb202108031452.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty152/pimWidgetApi/webBig_20210731200436_webBig202107300824131230017KadinWeb2021073009511.jpg'}/>
            <Banner imgSrc={'https://cdn.dsmcdn.com/ty153/pimWidgetApi/webBig_20210804064733_party020321new1.jpg'}/>
            
        </div>
        <div className="sidebar">
        <Banner height="60%" imgSrc={'https://cdn.dsmcdn.com/ty153/pimWidgetApi/mobile_20210806133649_123016KadinMobile202107291651.jpg'}/>
        <Banner height="60%" imgSrc={'https://cdn.dsmcdn.com/mrktng/crm/rightBnr/aug/09/imgs/saat.gif'}/>
        <Banner height="60%" imgSrc={'https://cdn.dsmcdn.com/ty140/campaign/banners/original/574176/08bb815e92_1.jpg'}/>
        <Banner height="60%" imgSrc={'https://cdn.dsmcdn.com/ty156/pimWidgetApi/mobile_20210810033200_grimelange030821mobil.jpg'}/>
        <Banner height="60%" imgSrc={'https://cdn.dsmcdn.com/ty153/campaign/banners/original/570256/770564b9ae_0.jpg'}/>
        <Banner height="60%" imgSrc={'https://cdn.dsmcdn.com/ty149/campaign/banners/original/575644/ce2108fbf5_0.jpg'}/>

        </div>
    </div>
)
                }

export default Banners;