import mainlogo from './main/main_logo.jpg';
import mainbg from './main/main_bg.png';


function Main_header(){
    return(
        <header className='app_main'>
            <div className='tan_logo'>
                <a href="http://naver.com" alt="탄천 로고">
                    <img src={mainlogo} alt='탄천로고' />
                </a>
            </div>
            <div className='main_img'>
                <img src={mainbg} alt='메인이미지' />
            </div>
        </header>
    )
}

export default Main_header;