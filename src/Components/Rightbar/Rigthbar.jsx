
import AddPosition from './AddPosition';
import FindUs from './FindUs';
import QZone from './QZone';
import SocialLogin from './SocialLogin';

const Rigthbar = () => {
    return (
        <div className="space-y-20">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <AddPosition></AddPosition>
        </div>
    );
};

export default Rigthbar;