import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class About extends Component {

    render() {

        

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL MUSIC VIDEO
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" 
                            height="400px" 
                            src="https://www.youtube.com/embed/abPmZCZZrFA" 
                            title="SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL MUSIC VIDEO" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <div className='content-right'>
                        ✔ Các bạn có thể làm chủ công nghệ, cũng như học được, biết được những kiến thức thực tế dùng tại các công ty hiện nay. Sau khi kết thúc khóa học này, mình tin chắc rằng dự án này đủ lớn, đủ thực tế để cho các bạn mới ra trường viết vào CV xin việc của mình ^^
                        ✔ Các bạn hiểu được 1 FullStack Web Developer thì cần chuẩn bị những gì. Ở đây, mình không dám chắc 100% các bạn sẽ trở thành Fullstack Developer, nhưng nếu bạn chọn Frontend hay Backend thì khóa học này cũng cung cấp cho bạn nhiều điều bổ ích
                    </div>  
                </div>  
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
