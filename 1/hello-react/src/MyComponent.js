// props 연습

import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
    return <div>
        안녕하세요. 제 이름은 {name}입니다.
        children 값은 {children} 입니다.
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
}


MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

// 이 코드는 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정한다
export default MyComponent;