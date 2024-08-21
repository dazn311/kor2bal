import {FC} from 'react';
import TopMenu from "../top-menu/TopMenu";
import TopSoc from "../top_soc/TopSoc";
import EnterWrap from "../enter_wrap/EnterWrap";
import './Header.styles.css';

export const Header:FC = async ()=> {

  return (
      <div className={'header'}>
        <div className={'top_line'}>
          <div className={'container'}>
            <div className={'row'}>
              <TopMenu/>
              <TopSoc/>
              <EnterWrap/>
            </div>
            </div>  
        </div>
      </div>
  )
}
export default Header;