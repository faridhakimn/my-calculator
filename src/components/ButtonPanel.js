import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../css/ButtonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  const onClick = buttonName => clickHandler(buttonName);

  return (
    <div className="ButtonPanel">
      <div className="ButtonPanelGroup">
        <Button clickHandler={onClick} name="AC" wide color="#DCDCDC" />
        <Button clickHandler={onClick} name="CE" color="	#DCDCDC" />
        <Button clickHandler={onClick} name="/" textColor="white"  color = "#FFBF00"/>
      </div>
      <div className="ButtonPanelGroup">
        <Button clickHandler={onClick} name="7" textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="8" textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="9" textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="×" textColor="white"  color="#FFBF00"  />
      </div>
      <div className="ButtonPanelGroup">
        <Button clickHandler={onClick} name="4" textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="5" textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="6" textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="-" textColor="white"  color="#FFBF00"  />
      </div>
      <div className="ButtonPanelGroup">
        <Button clickHandler={onClick} name="1" textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="2" textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="3" textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="+" textColor="white"  color="#FFBF00"  />
      </div>
      <div className="ButtonPanelGroup">
        <Button clickHandler={onClick} name="0" wide textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="." textColor="white"  color="#696969" />
        <Button clickHandler={onClick} name="=" textColor="white" color="#FFBF00" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;